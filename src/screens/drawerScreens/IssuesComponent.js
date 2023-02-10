import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { useGetIssuesQuery } from "../../redux/GetProject/ProjectApi";
import IssuesCard from "../../components/IssuesCard";
import { DrawerHeader } from "../../components";
import { useDrawerProgress } from "@react-navigation/drawer";

const IssuesComponent = ({ navigation }) => {
  const { data, isLoading, error } = useGetIssuesQuery();
  const progress = useDrawerProgress(1);

  if (error) {
    Alert.alert("Error", error.error);
  }
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
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
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
              <IssuesCard
                cardStyle={{
                  marginVertical: 10,
                  marginHorizontal: 15,
                }}
                item={item}
                onPress={() => console.warn("issues")}
              />
            );
          }}
        />
      )}
    </Animated.View>
  );
};

export default IssuesComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 5,
    flexDirection: "row",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
});
