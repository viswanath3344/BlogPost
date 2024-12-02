import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ({ post, deletePost }) => {
   const navigation = useNavigation();

   return <>
      <TouchableOpacity
       onPress={() => {navigation.navigate("Details", {id: post.id})}}
      >
         <View style = {styles.rowStyle}>
         <Text numberOfLines={3} style = {{flex: 1}} >{post.title}</Text>
         <TouchableOpacity
            onPress={() => deletePost(post.id)}
         >
            <AntDesign name="delete" size={24} color="black" />
         </TouchableOpacity>
         </View>
      </TouchableOpacity>
   </>
};

const styles = StyleSheet.create({
   rowStyle: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: 'gray',
      paddingHorizontal: 8,
      minHeight: 50,
      backgroundColor: "white"
   }
})