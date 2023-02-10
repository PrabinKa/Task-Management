import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { DrawerHeader, Discussion } from "../../components";
import { useGetDiscussionQuery } from "../../redux/GetProject/ProjectApi";

const CreateDiscussion = ({ navigation }) => {
  const { data, error, isLoading } = useGetDiscussionQuery();
  // console.warn("data", data);
  if (error) {
    Alert.alert("Error", error.error);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DrawerHeader />
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator
          renderItem={({ item, index }) => {
            return (
              <Discussion
                item={item}
                containerStyle={{ marginVertical: 10, marginHorizontal: 15 }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default CreateDiscussion;

const styles = StyleSheet.create({
  backButtonContainer: {
    marginTop: StatusBar.currentHeight + 10,
    flexDirection: "row",
    marginLeft: 5,
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
});
