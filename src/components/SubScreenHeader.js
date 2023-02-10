import { View, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const SubScreenHeader = ({ onPress }) => {
  return (
    <View
      style={{
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
      }}
    >
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
        <Ionicons name="arrow-back" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default SubScreenHeader;
