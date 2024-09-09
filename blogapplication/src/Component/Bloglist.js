import { connect } from "react-redux";
import { useEffect } from "react";
import { FetchBlogList } from "../Redux/Action";
import { Link } from "react-router-dom";

const Bloglist = (props) => {
    const { loadblog } = props;

    useEffect(() => {
        loadblog();
    }, [loadblog]);

    const styles = {
        container: {
            
            // backgroundColor: '#f5f5f5', // Light gray background
        },
        card: {
            borderRadius: '10px',
            transition: 'transform 0.2s',
            backgroundColor: '#003366', // Deep blue color for card
            color: '#fff'
        },
        cardBody: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            fontSize: '1.4rem',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '0'
        },
        readButton: {
            backgroundColor: '#FFD700', // Golden color for button
            borderColor: '#FFD700',
            fontWeight: '500'
        }
    };

    return (
        <div style={styles.container} className="container mt-5">
            <div className="header d-flex justify-content-between align-items-center mb-5">
                <h2 className="text-muted">Welcome to My Blog App</h2>
                <Link to="/blog/add">
                    <button className="btn btn-outline-primary">New Post</button>
                </Link>
            </div>

            <div className="blog-list">
                {props.blog.list && props.blog.list.map(item => (
                    <div 
                        key={item.id} 
                        className="card mb-4 shadow-sm p-3" 
                        style={styles.card}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div className="card-body" style={styles.cardBody}>
                            <h5 className="card-title" style={styles.title}>{item.title}</h5>
                            <Link to={`/blog/view/${item.id}`} className="btn" style={styles.readButton}>Read</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadblog: () => dispatch(FetchBlogList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bloglist);
