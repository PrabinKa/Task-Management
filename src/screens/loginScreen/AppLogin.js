import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppLogin = ({ navigation }) => {
  const { Login, loginLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle = "dark-content" />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: 20,
            marginTop: StatusBar.currentHeight + 50,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "#1b5693",
              fontWeight: "bold",
              textShadowColor: "#000",
              textShadowOffset: { height: 1, width: 0 },
              textShadowRadius: 2,
            }}
          >
            Task Management System
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            resizeMode="cover"
            source={require("../../../assets/task.png")}
            style={{ height: 200, width: "90%" }}
          />
        </View>
        <View style={{ flex: 1, marginTop: 60 }}>
          <View style={styles.textInputWrapper}>
            <View style={{ justifyContent: "center" }}>
              <Ionicons name="mail-outline" size={25} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <View style={{ justifyContent: "center" }}>
              <Ionicons name="lock-closed-outline" size={25} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={secureText}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={{ justifyContent: "center" }}
            >
              {secureText ? (
                <Ionicons name="eye-off-outline" size={25} />
              ) : (
                <Ionicons name="eye-outline" size={25} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: "#9b1d20",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 60,
              height: 50,
              borderRadius: 25,
              shadowColor: "#000",
              shadowOffset: {
                height: 1,
                width: 0,
              },
              elevation: 5,
              shadowOpacity: 0.2,
            }}
          >
            {loginLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <TouchableOpacity onPress={() => Login({ email, password })} style={{justifyContent: "center", alignItems: "center"}} >
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                >
                  LOG IN
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInputWrapper: {
    flexDirection: "row",
    width: "80%",
    borderColor: "#1b5693",
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  textInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    width: "80%",
  },
});
