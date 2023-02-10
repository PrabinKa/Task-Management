import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { COLORS } from "../constants/Constants";
import ProjectsComponent from "../screens/drawerScreens/ProjectsComponent";
import UsersComponent from "../screens/drawerScreens/UsersComponent";
import TasksComponent from "../screens/drawerScreens/TasksComponent";
import IssuesComponent from "../screens/drawerScreens/IssuesComponent";
import CreateDiscussion from "../screens/drawerScreens/CreateDiscussion";
import Ionicons from "react-native-vector-icons/Ionicons";
import { icons } from "../constants/Constants";
import { screens } from "../constants/Constants";
import { GetSelectedTab } from "../redux/SelectTab/SelectedTab";
import { useDispatch } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env"

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ icon, label, isFocused, onPress }) => {

  // console.warn("label", label)
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: 20,
        alignItems: "center",
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: isFocused ? COLORS.White : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 25,
          height: 25,
          tintColor: isFocused ? COLORS.Blue : COLORS.White,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          color: isFocused ? COLORS.Blue : COLORS.White,
          tintColor: COLORS.White,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Projects");
  const [data, setData] = useState(null)
  const dispatch = useDispatch();
  const { Logout } = useContext(AuthContext);


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Response')
      if(jsonValue){
        let data = JSON.parse(jsonValue)
        setData(data)
      }
    } catch(e) {
      console.warn(e)
    }
  }

  useEffect(()=> {
    getData()
  },[])

  useEffect(() => {
    dispatch(GetSelectedTab(selectedTab));
  },[selectedTab])

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure! You want to logout.", [
      {
        text: "Cancel",
        onPress: () => ToastAndroid.show("Cancelled!", ToastAndroid.SHORT),
      },
      {
        text: "Ok",
        onPress: () => Logout(),
      },
    ]);
  };

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Ionicons name="close-sharp" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={ data ? {uri: `${BASE_URL}images/${data.image}`} : require('../../assets/boy.jpeg')}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
              borderRadius: 20,
            }}
          />
          <View style={{ marginLeft: 5, justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 5,
              }}
            >
              {data? data.full_name : null}
            </Text>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontWeight: "bold", fontSize: 12 }}
            >
              {data ? data.email : null}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 40 }}>
          <CustomDrawerItem
            label={screens.projects}
            icon={icons.projects}
            isFocused={selectedTab == screens.projects}
            onPress={() => {
              setSelectedTab(screens.projects);
              navigation.navigate("projects");
            }}
          />
          <CustomDrawerItem
            label={screens.users}
            icon={icons.users}
            isFocused={selectedTab == screens.users}
            onPress={() => {
              setSelectedTab(screens.users);
              navigation.navigate("users");
            }}
          />
          <CustomDrawerItem
            label={screens.tasks}
            icon={icons.tasks}
            isFocused={selectedTab == screens.tasks}
            onPress={() => {
              setSelectedTab(screens.tasks);
              navigation.navigate("tasks");
            }}
          />
          <CustomDrawerItem
            label={screens.issues}
            icon={icons.issues}
            isFocused={selectedTab == screens.issues}
            onPress={() => {
              setSelectedTab(screens.issues);
              navigation.navigate("issues");
            }}
          />
          <CustomDrawerItem
            label={screens.discussion}
            icon={icons.issues}
            isFocused={selectedTab == screens.discussion}
            onPress={() => {
              setSelectedTab(screens.discussion);
              navigation.navigate("discussion");
            }}
          />
        </View>
        <View>
          <CustomDrawerItem
            label={screens.logout}
            icon={icons.logout}
            onPress={() => handleLogout()}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.Blue }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "front",
          drawerStyle: {
            flex: 1,
            width: 250,
            paddingRight: 10,
            backgroundColor: COLORS.Blue,
          },
          headerShown: false,
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        initialRouteName="ProjectsComponent"
      >
        <Drawer.Screen name="projects">
          {(props) => <ProjectsComponent {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="users">
          {(props) => <UsersComponent {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="tasks">
          {(props) => <TasksComponent {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="issues">
          {(props) => <IssuesComponent {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="discussion">
          {(props) => <CreateDiscussion {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
