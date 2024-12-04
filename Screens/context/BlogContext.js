import createDataContext from "./createDataContext";
import Jsonserver from "../api/Jsonserver";

const blogPostReducer = (posts, action) => {
    switch (action.type) {
        case 'getPosts': 
        return action.payload;
        case 'edit': 
              return posts.map((post)=> {
                if (post.id == action.payload.id) {
                    return action.payload;
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

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await Jsonserver.get("/blogPosts")
        console.log(response.data);
        dispatch({ type: "getPosts", payload: response.data });
    }
}

const addPost = (dispatch) => {
    return async (title, message, callback) => {
         await Jsonserver.post("/blogPosts", {title, message});
         if (callback) {
             callback();
         }
    };
};

const deletePost = (dispatch) => {
    return async (postId) => {
        await Jsonserver.delete(`/blogPosts/${postId}`)
        dispatch({ type: "delete", payload: postId })
    };
};

const editPost = (dispatch) => {
    return async (id, title, message, callback) => {
        await Jsonserver.put(`/blogPosts/${id}`, {title, message})
        dispatch({ type: "edit", payload: { id, title, message } })
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogPostReducer,
    { addPost, deletePost, editPost, getBlogPosts },
    []
);