import axios from "axios"
import { ADD_BLOG, DELETE_BLOG, FAIL_REQUEST, GET_BLOG_LIST, GET_BLOG_OBJ, MAKE_REQUEST, UPDATE_BLOG,TOGGLE_LIKE_SUCCESS } from "./ActionType"
import { toast } from "react-toastify";

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getbloglist=(data)=>{
    return{
        type:GET_BLOG_LIST,
        payload:data
    }
}
export const deleteblog=()=>{
    return{
        type:DELETE_BLOG
    }
}
export const addblog=()=>{
    return{
        type:ADD_BLOG
    }
}
export const updateblog=()=>{
    return{
        type:UPDATE_BLOG
    }
}

export const getblogobj=(data)=>{
    return{
        type:GET_BLOG_OBJ,
        payload:data
    }
}

// Redux/Action.js
// export const gettoggleLike = (id, currentLikeStatus) => ({
//     type: 'TOGGLE_LIKE_SUCCESS',
//     payload: {
//         id: id,
//         like: !currentLikeStatus
//     }
// });


export const FetchBlogList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:8000/blog').then(res=>{
            const list=res.data;
            dispatch(getbloglist(list));
    }).catch(err=>{
                dispatch(failRequest(err.messsage))
            })
      
    }
}



export const Removeblog=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.delete('http://localhost:8000/blog/'+code).then(res=>{
            dispatch(deleteblog());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}


export const FunctionAddblog=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.post('http://localhost:8000/blog',data).then(res=>{
            dispatch(addblog());
            toast.success('Blog Added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    
     
    }
}

export const FunctionUpdateBlog =(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.put('http://localhost:8000/blog/'+code,data).then(res=>{
            dispatch(updateblog());
            toast.success('Blog Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    
     
    }
}

export const FetchBlogObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get('http://localhost:8000/blog/'+code).then(res=>{
            const list=res.data;
            dispatch(getblogobj(list));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}
export const toggleLike = (id, currentLikeStatus) => dispatch => {
    const newLikeStatus = !currentLikeStatus;
    

    axios.patch(`http://localhost:8000/blog/${id}`, {
        like: newLikeStatus,
    })
    .then(response => {
        if(response.status === 200) {
            // Using the newLikeStatus and newLikeCount directly
            dispatch({
                type: TOGGLE_LIKE_SUCCESS,
                payload: { id, like: newLikeStatus }
            });
            // toast.info('You Liked the Blog!');
        } else {
            throw new Error('Failed to update like status');
        }
    })
    .catch(error => {
        console.error('Error updating like:', error);
        toast.error('Failed to update like status.');
    });
};
