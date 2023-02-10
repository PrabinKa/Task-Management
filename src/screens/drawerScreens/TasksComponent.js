import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CompletedTask from "../taskScreens/CompletedTask";
import InProgressTask from "../taskScreens/InProgressTask";
import StartedTask from "../taskScreens/StartedTask";
import NotStartedTask from "../taskScreens/NotStartedTask";
import OnHoldTask from "../taskScreens/OnHoldTask";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { DrawerHeader } from "../../components";

const Tab = createMaterialTopTabNavigator();

const TasksComponent = ({ navigation }) => {
  const progress = useDrawerProgress(0);

  const scale = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const borderRadius = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [26, 0],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DrawerHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: "auto",
            alignItems: "flex-start",
          },
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 14,
            fontWeight: "800",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "black",
          },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen name="Completed Task" component={CompletedTask} />
        <Tab.Screen name="InProgress Task" component={InProgressTask} />
        <Tab.Screen name="Started Task" component={StartedTask} />
        <Tab.Screen name="NotStarted Task" component={NotStartedTask} />
        <Tab.Screen name="OnHold Task" component={OnHoldTask} />
      </Tab.Navigator>
    </View>
  );
};

export default TasksComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButtonContainer: {
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 5,
    flexDirection: "row",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
});
