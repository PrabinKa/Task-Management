import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SubScreenHeader } from "../../components";
import ProjectDetails from "../../components/ProjectDetails";

const ProjectDetailedPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar
        backgroundColor="white"
        barStyle='dark-content'
      />
      <SubScreenHeader onPress={() => navigation.goBack()} />
      <ProjectDetails />
    </View>
  );
};

export default ProjectDetailedPage;
