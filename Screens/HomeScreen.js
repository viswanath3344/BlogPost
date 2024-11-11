import React, { useContext } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import PostRow from "./components/PostRow";
import BlogContext from "./context/BlogContext";

const HomeScreen = ({ navigation }) => {
    const {data, addPost} = useContext(BlogContext);

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
        <>
            <Text>HomeScreen</Text>
            <Button 
              title="Add post"
              onPress={addPost}
            />
            <FlatList
                ItemSeparatorComponent={FlatListItemSeparator}
                data={data}
                keyExtractor={(post) => { return post.id }}
                renderItem={({ item }) => {
                    return <PostRow post={item} />
                }}
            />
            <Button
                title="Details >"
                onPress={() => navigation.navigate("Details")}
            />
        </>
        
    )
};

const styles = StyleSheet.create({

});

export default HomeScreen;