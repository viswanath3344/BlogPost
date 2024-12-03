import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

const PostForm = ({
    initialValues = {
        title: '',
        message: '',
        formTitle: 'Add Post'
    },
    action }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [message, setMessage] = useState(initialValues.message);

    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}> {initialValues.formTitle} </Text>
            <Text style={styles.lableStyle}>Title:</Text>
            <TextInput
                style={styles.textInputStyle}
                value={title}
                onChangeText={
                    newText => { setTitle(newText) }
                }
            />
            <Text style={styles.lableStyle}>Message:</Text>
            <TextInput
                style={styles.textInputStyle}
                value={message}
                onChangeText={
                    newText => { setMessage(newText) }
                }
            />
            <Button
                title="Save Post"
                onPress={() => {
                    action(title, message);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8
    },
    headerStyle: {
        fontSize: 25,
        fontStyle: "normal",
        textAlign: "center"
    },
    lableStyle: {
        fontSize: 18,
        marginTop: 8
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 2
    }
})

export default PostForm;