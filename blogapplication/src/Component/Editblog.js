import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FetchBlogObj, FunctionUpdateBlog } from "../Redux/Action";

const Editblog = () => {
    const [title,titlechange]= useState('');
    const [category,categorychange]= useState('');
    const [content,contentchange]= useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { code } = useParams();
    const blogobj=useSelector((state)=>state.blog.blogobj)

    const handlesubmit=(e)=>{
        e.preventDefault();
        const blogobj={id:code,title,category,content,like:false,};

        dispatch(FunctionUpdateBlog(blogobj,code));
        console.log(blogobj);
        navigate('/blog');
    }

    useEffect(()=>{
        dispatch(FetchBlogObj(code));
    },[])

    useEffect(()=>{
       if(blogobj){
        titlechange(blogobj.title);
        categorychange(blogobj.category);
        contentchange(blogobj.content);
       }
    },[blogobj]);

const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    input: {
      width: '100%',
      padding: '15px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: '1px solid #e0e0e0',
      transition: 'border-color 0.3s'
    },
    textarea: {
      width: '100%',
      padding: '15px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: '1px solid #e0e0e0',
      minHeight: '180px',
      transition: 'border-color 0.3s'
    },
    button: {
      padding: '12px 25px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <form style={styles.form} className="form-group" onSubmit={handlesubmit}>
      <div style={styles.formTitle} >Edit Blog</div>
      <input 
        type="text" 
        name="title" 
        placeholder="Title" 
        className="form-control"
        onChange={e => titlechange(e.target.value)}
        value={title || ''}
        style={styles.input} 
        onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
      />
      <input 
        type="text" 
        name="category" 
        placeholder="Category" 
        className="form-control"
        style={styles.input}
        onChange={e => categorychange(e.target.value)}
        value={category || ''}
        onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
      />

      <textarea 
        name="content" 
        placeholder="Content..." 
        className="form-control"
        onChange={e => contentchange(e.target.value)}
        value={content || ''}
        style={styles.textarea}
        onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
      />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};
 
export default Editblog;
