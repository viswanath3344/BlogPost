import createDataContext from "./createDataContext";

const blogPostReducer = (posts, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...posts,
                {
                    id: Math.floor((Math.random() * 1000) + 1), // create a random number between 1~1000
                    title: action.payload.title,
                    message: action.payload.message
                }
            ];
            case 'edit': 
              return posts.map((post)=> {
                if (post.id == action.payload.id) {
                    let result =  {...post, title: action.payload.title, message: action.payload.message} 
                    return result;
                }else {
                    return post;
                }
              })
            case 'delete': 
             return posts.filter((post) => { return post.id !== action.payload})
        case 'default':
            return posts
    }
}

const addPost = (dispatch) => {
    return (title, message, callback) => {
        dispatch({ type: "add" , payload: {title, message}})
        callback();
    };
};

const editPost = (dispatch) => {
    return (id, title, message, callback) => {
        dispatch({ type: "edit" , payload: {id, title, message}})
        callback();
    };
};

const deletePost = (dispatch) => {
    return (postId) => {
        dispatch({ type: "delete", payload: postId })
    };
};

export const { Context, Provider } = createDataContext(
    blogPostReducer,
    { addPost, deletePost, editPost },
    []
);