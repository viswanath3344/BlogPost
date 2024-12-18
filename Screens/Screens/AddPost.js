import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import PostForm from "../components/PostForm";

const AddPost = ({ navigation }) => {
    const { addPost } = useContext(Context);

    return <PostForm
        action={(title, message) => {
            addPost(title, message, () => {
                navigation.pop();
            })
        }} />
};

export default AddPost;
