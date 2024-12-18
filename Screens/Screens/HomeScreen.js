import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PostRow from "../components/PostRow";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
    const { state, deletePost, getBlogPosts } = useContext(Context);

    // https://reactnavigation.org/docs/function-after-focusing-screen/?config=static
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getBlogPosts();
          // The screen is focused
          // Call any action
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (<TouchableOpacity
                onPress={() => { navigation.navigate("AddPost") }}
            >
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
            )
        });
    }, [navigation]);

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#000",
                    marginHorizontal: 16,
                }}
            />
        );
    }
    return (
        <View>
            <Text>HomeScreen</Text>
            <FlatList
                //  ItemSeparatorComponent={FlatListItemSeparator}
                data={state}
                keyExtractor={(post) => { return post.id }}
                renderItem={({ item }) => {
                    return <PostRow post={item} deletePost={deletePost} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;