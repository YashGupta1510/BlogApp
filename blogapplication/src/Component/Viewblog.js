import { connect } from "react-redux";
import { useEffect } from "react";
import {  FetchBlogObj, Removeblog,toggleLike } from "../Redux/Action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate,useParams } from 'react-router-dom';


const Viewblog = (props) => {
    const navigate=useNavigate();

    const { code } = useParams();
    console.log({code})

useEffect(() => {
   props.loadblog(code);
}, [code]);

const handleLikeToggle = (id, currentLikeStatus) => {
    props.toggleLike(id, currentLikeStatus);
}

const handledelete=(code)=>{
    if(window.confirm('Are You Sure You Want to delete ?')){
        props.removeblog(code);
        props.loadblog();
        navigate('/blog');
        toast.success('Blog Removed Successfully.');

    }
}

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
            width: '100vw',  
            padding: '20px',
            backgroundColor: 'white'
        },
        contentWrapper: {
            width: '80%', 
            maxWidth: '1200px', 
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
            padding: '10px 20px',
            backgroundColor: '#003366',
        },
        actions: {
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
        },
        actionButton: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'color 0.3s',
        },
        content: {
            fontSize: '1.2rem',
            padding: '20px',
            lineHeight: '1.6'
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            borderBottom: '2px solid #4CAF50',
            paddingBottom: '10px'
        },
        categories: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '20px'
        },
        category: {
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '1rem'
        },
          
    };
   
    const item = props.blog && props.blog.blogobj;

      return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <div style={styles.header}>
                    <div></div>
                    <div style={styles.actions}>
                    <button 
    style={{ ...styles.actionButton, color: item.like ? 'red' : 'white' }} 
    onClick={() => handleLikeToggle(item.id, item.like)}>
    {item.like ? '❤️' : '♡'} Like
</button>

                        <Link to={'/blog/edit/' + item.id}><button style={styles.actionButton}>✏️ Edit</button></Link>
                        <button style={styles.actionButton} onClick={() => { handledelete(item.id); } }>❌ Delete</button>
                    </div>
                </div>
                <div style={styles.content}>
                    <h1 style={styles.title}>{item.title}</h1>
                    <div style={styles.categories}>{item.category}</div>
                    {item.content}
                </div>
            </div>
        </div>
       )  
}
 
    const mapStateToProps=(state)=>{
        return{
            blog:state.blog
    
        }
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            loadblog:(code)=>dispatch(FetchBlogObj(code)),
            removeblog:(code)=>dispatch(Removeblog(code)),
            toggleLike: (id, currentLikeStatus) => dispatch(toggleLike(id, currentLikeStatus))

        
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps) (Viewblog);