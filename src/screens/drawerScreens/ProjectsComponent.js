import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Image,
  FlatList,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useGetProjectQuery } from "../../redux/GetProject/ProjectApi";
import Animated from "react-native-reanimated";
import { ProjectCard, DrawerHeader } from "../../components";
import { useDispatch } from "react-redux";
import { GetProjectDetails } from "../../redux/ProjectDetails/ProjectDetails";
import { useDrawerProgress } from "@react-navigation/drawer";

const ProjectsComponent = ({ navigation }) => {
  const { data, isLoading, error } = useGetProjectQuery();
  const dispatch = useDispatch();

  if (error) {
    Alert.alert("Error", error.error);
  }
  const handleOnpress = (item) => {
    dispatch(GetProjectDetails(item));
    navigation.navigate("ProjectDetailedPage");
  };

  return (
    <Animated.View style={{ flex: 1, backgroundColor: "#fff" }}>
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
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ProjectCard
                containerStyle={{
                  height: 100,
                  marginVertical: 10,
                  marginHorizontal: 15,
                }}
                item={item}
                onPress={() => handleOnpress(item)}
              />
            );
          }}
        />
      )}
    </Animated.View>
  );
};

export default ProjectsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  backButtonContainer: {
    marginTop: StatusBar.currentHeight + 10,
    flexDirection: "row",
    marginLeft: 5,
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  projectContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F5F5F5",
    shadow: "#000",
    elevation: 1,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.5,
  },
  projectName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1569c7",
  },
  priorityWrapper: {
    backgroundColor: "#9b1d20",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
