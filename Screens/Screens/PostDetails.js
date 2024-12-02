import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';

const PostDetails = ({ route }) => {
    const navigation = useNavigation();
    const { state } = useContext(Context);
    const id = route.params.id;
    const selectedPost = state.find((post) => { return post.id == id });

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => { navigation.navigate("EditPost", {id}) }}
                >
                    <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return <View>
        <Text>{selectedPost.title}</Text>
        <Text>{selectedPost.message}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default PostDetails;