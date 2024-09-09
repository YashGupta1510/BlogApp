import { ADD_BLOG, DELETE_BLOG, FAIL_REQUEST, GET_BLOG_LIST, MAKE_REQUEST, UPDATE_BLOG ,GET_BLOG_OBJ,TOGGLE_LIKE_SUCCESS} from "./ActionType"


const initialstate={
    loading:true,
    list:[],
    blogobj:{},
    errmessage:''
}

export const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case MAKE_REQUEST:
            return {
                ...state,
                loading:true
            }
            case FAIL_REQUEST:
                return {
                ...state,
                loading:false,
                errmessage:action.payload
                }
                case GET_BLOG_LIST:
                    return {
                    ...state,
                    loading:false,
                    errmessage:'',
                    list:action.payload,
                    blogobj:{}
                    }

                    case DELETE_BLOG:return{
                        ...state,
                        loading:false
                    }
                    case ADD_BLOG:return{
                        ...state,
                        loading:false
                    }
                    case UPDATE_BLOG:return{
                        ...state,
                        loading:false
                    }
                    case GET_BLOG_OBJ:return{
                        ...state,
                        loading:false,
                        blogobj:action.payload
                    }
                    case TOGGLE_LIKE_SUCCESS:
    if (state.blogobj && state.blogobj.id === action.payload.id) {
        return {
            ...state,
            blogobj: {
                ...state.blogobj,
                like: action.payload.like,
            }
        };
    }
    // return state;
        default:return state

    }
}