import {
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { useGetProjectQuery } from "../../redux/GetProject/ProjectApi";
import { ProjectCard } from "../../components";
import { GetProjectDetails } from "../../redux/ProjectDetails/ProjectDetails";
import { useDispatch } from "react-redux";

const InProgressTask = ({navigation}) => {
  const { data, error, isLoading } = useGetProjectQuery();
  const dispatch = useDispatch()

  if (error) {
    Alert.alert("Error", error.error);
  }

  const inprogressTask = data.filter(function (item) {
    return item.status == "Inprogress";
  });

  const handleOnpress = (item) => {
    dispatch(GetProjectDetails(item))
    navigation.navigate('ProjectDetailedPage')
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#1569c7" />
        </View>
      ) : (
        <FlatList
          data={inprogressTask}
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
    </View>
  );
};

export default InProgressTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
