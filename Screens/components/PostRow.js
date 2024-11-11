import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({post}) => {
   return <View style = {styles.rowStyle}>
      <Text style = {{marginLeft: 16}}>{post.id}</Text>
      <Text numberOfLines={3} style = {{flex:1, marginHorizontal: 16}}>{post.title}</Text>
   </View>
};

const styles = StyleSheet.create({
    rowStyle: {
       flexDirection: "row",
       alignItems: "center",
    //   backgroundColor: "red",
       marginTop: 0,
       marginHorizontal: 8,
       borderRadius: 5,
       minHeight: 40,
       backgroundColor: "white"
    }
})