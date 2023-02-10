import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { useGetUserQuery } from "../../redux/GetProject/ProjectApi";
import { useDispatch } from "react-redux";
import { GetUserDetails } from "../../redux/GetUserDetails/UserDetails";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { DrawerHeader } from "../../components";
import {BASE_URL} from "@env"

const UsersComponent = ({ navigation }) => {
  const { data, isLoading, error } = useGetUserQuery();
  const dispatch = useDispatch();
  const progress = useDrawerProgress(0);

  // console.warn("data", data)

  if (error) {
    Alert.alert("Error", error.error);
  }

  const handleOnpress = (user) => {
    navigation.navigate("UserDetails");
    dispatch(GetUserDetails(user));
  };

  return (
    <Animated.View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <DrawerHeader />

      <View style={styles.wholeContainer}>
        {isLoading && (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        )}
        {data && (
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginVertical: 10,
              }}
            >
              {data.map((user, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.usersCard}
                    onPress={() => handleOnpress(user)}
                  >
                    <Image
                      resizeMode="contain"
                      source={{
                        uri: `${BASE_URL}images/${user.image}`,
                      }}
                      style={{ height: 70, width: 70, alignSelf: "center" }}
                    />
                    <Text
                      numberOfLines={1}
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#1569c7",
                      }}
                    >
                      {user.full_name}
                    </Text>
                    <Text numberOfLines={1} style={styles.userDetails}>
                      {user.email}
                    </Text>
                    <Text numberOfLines={1} style={styles.userDetails}>
                      {user.mobile_no}
                    </Text>
                    <Text numberOfLines={1} style={styles.userDetails}>
                      {user.address}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>
    </Animated.View>
  );
};

export default UsersComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButtonContainer: {
    marginTop: StatusBar.currentHeight + 10,
    flexDirection: "row",
    marginLeft: 5,
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  wholeContainer: {
    flex: 1,
    height: "100%",
  },
  usersCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    width: "40%",
    marginTop: 20,
    shadowColor: "#000",
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
  },
  userDetails: { fontSize: 12, fontWeight: "700" },
});
