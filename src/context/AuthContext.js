import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import {BASE_URL} from "@env"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [officeId, setOfficeId] = useState(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  // console.warn("authcontext", userToken)
  const Login = async ({ email, password }) => {
    setLoginLoading(true);
    await fetch(`${BASE_URL}login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((resp) => {
        // console.warn("resp", resp);
        const jsonValue = JSON.stringify(resp)
        if (resp.token) {
          let userToken = resp.token;
          setUserToken(userToken);
          AsyncStorage.setItem("Token", userToken);
          AsyncStorage.setItem("Response", jsonValue);
        } else if (resp.message) {
          Alert.alert("Error", resp.message);
        } else if (resp.errors) {
          Alert.alert("Error", "Both email and password fields are required");
        }
      });

    setLoginLoading(false);
  };

  const Logout = async () => {
    setLogoutLoading(true);
    try {
      const value = await AsyncStorage.removeItem("Token");
      if (value == null) {
        setUserToken(null)
      }
    } catch (error) {
      Alert.alert("Error", "Oops got some error!");
    }
    setLogoutLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("Token");
      if (userToken) {
        setUserToken(userToken);
      }

      setIsLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userToken,
        Login,
        Logout,
        isLoading,
        loginLoading,
        logoutLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
