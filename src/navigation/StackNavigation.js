import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawer from "./CustomDrawer";
import AppLogin from "../screens/loginScreen/AppLogin";
import ProjectDetailedPage from "../screens/projectDetailsScreen/ProjectDetailedPage";
import UserDetails from "../screens/UserDetails/UserDetails";
import { AuthContext } from "../context/AuthContext";
import Lottie from 'lottie-react-native';
import { View } from "react-native";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CustomDrawer"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen
        name="ProjectDetailedPage"
        component={ProjectDetailedPage}
      />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  if(isLoading){
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Lottie source={require("../../assets/loader.json")} style={{height: 50, width: 50}} />
    </View>
  }
  return (
    <Stack.Navigator
      initialRouteName="AppStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      {userToken ? (
        <Stack.Screen name="AppStack" component={AppStack} />
      ) : (
        <Stack.Screen name="AppLogin" component={AppLogin} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
