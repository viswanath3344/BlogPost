import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogPostReducer = (posts, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...posts,
                {
                    id: posts.length + 1,
                    title: `Post # ${posts.length + 1}`,
                    message: `Post Message #${posts.length + 1}`
                }
            ];
        case 'default':
            return posts
    }
}

export const BlogProvider = ({ children }) => {
    const [posts, dispatch] = useReducer(blogPostReducer, [])

    const addPost = () => {
        dispatch({type: "add"})
    }

    return <BlogContext.Provider value={{ data: posts, addPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;