import { View, Text, Image, Pressable, Alert, ToastAndroid } from "react-native";
import React from "react";
import { COLORS } from "../constants/Constants";
import { useDeleteDiscussionMutation } from "../redux/GetProject/ProjectApi";

const Discussion = ({ item, containerStyle }) => {
  const [deleteDiscussion, responseInfo] = useDeleteDiscussionMutation()
  // console.warn("responseInfo", item)
  if(responseInfo.isSuccess){
    ToastAndroid.show("Discussion deleted Successfully!", ToastAndroid.SHORT)
  }

  const handleDeleteDiscussion = (id) => {
    Alert.alert("Delete", "Are you sure you want to delete this discussion?", [
      {
        text: "No",
        onPress: () => ToastAndroid.show("Cancelled!", ToastAndroid.SHORT),
      },
      {
        text: "Yes",
        onPress: () => deleteDiscussion(id),
      },
    ]);
  }
  return (
    <View
      style={{
        ...containerStyle,
        borderBottomColor: "#999",
        borderBottomWidth: 1,
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "500" }}>
        {item.issue_title}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{uri: `http://192.168.1.77/task-management-api/api/images/${item.user_image}`}}
          style={{ height: 40, width: 40, borderRadius: 20 }}
          resizeMode="contain"
        />
        <View style={{ width: "90%" }}>
          <Text style={{ fontWeight: "600" }}>{item.user_name}</Text>
          <Text style={{ color: "#222" }}>{item.comment}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 40 }}>
        <Text>3 hours</Text>
        <Text style={{ marginLeft: 20, color: COLORS.Blue, fontWeight: "500" }}>
          Replies
        </Text>
        <Pressable onPress={()=> {handleDeleteDiscussion(item.id)}} >
        <Text style={{ marginLeft: 20, color: COLORS.Red, fontWeight: "500" }}>
          Delete
        </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Discussion;
