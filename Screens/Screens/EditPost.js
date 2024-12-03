import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import PostForm from "../components/PostForm";

const EditPost = ({ route, navigation }) => {
    const { state, editPost } = useContext(Context);
    const postId = route.params.id;
    const selectedPost = state.find((post) => {
        return post.id == postId
    })

    return (
        <PostForm
        initialValues = {{
            formTitle: "Edit Post", 
            title:selectedPost.title, 
            message:selectedPost.message 
        }}
        action={(title, message) => {
                editPost(selectedPost.id, title, message, () => {
                    navigation.popToTop();
                })
            }}
        />)
}

export default EditPost;