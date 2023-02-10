import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated from "react-native-reanimated";
import { COLORS } from "../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { GetSelectedTab } from "../redux/SelectTab/SelectedTab";
import { useCreateDiscussionMutation } from "../redux/GetProject/ProjectApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IssuesCard = ({ cardStyle, item, onPress }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showContent, setShowContent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const [comment, setComment] = useState(null)
  const [title, setTitle] = useState(null);
  const [projectId, setProjectId] = useState(null)
  const [userId, setUserId] = useState(null)
  const [createDiscussion, responseInfo] = useCreateDiscussionMutation()

  // console.warn("userid", responseInfo)

  const discussionData = {
    project_id: projectId,
    issue_title: title,
    comment: comment,
    discussion_creator_id: userId
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Response')
      if(jsonValue){
        let data = JSON.parse(jsonValue)
        setUserId(data.id)
      }
    } catch(e) {
      console.warn(e)
    }
  }

  useEffect(()=> {
    getData()
  },[])


  const config = {
    duration: 300,
    toValue: showContent ? 0 : 1,
    useNativeDriver: true,
  };

  const toggleItem = (issueTitle, projectId) => {
    setProjectId(projectId)
    setTitle(issueTitle);
    Animated.timing(animationController, config).start();
    setShowContent(!showContent);
  };

  const createDiscusssion = () => {
    createDiscussion(discussionData)
    setModalVisible(!modalVisible)
    dispatch(GetSelectedTab('Discussion'))
    navigation.navigate("discussion")
  }

  return (
    <View style={[styles.container, { ...cardStyle }]}>
      <TouchableOpacity
        onPress={() => toggleItem(item.title, item.project_id)}
        style={styles.touchableContainer}
      >
        <View style={{ width: "90%" }}>
          <Text style={styles.issueTitle}>{item.title}</Text>
          <Text style={styles.projectName}>{item.project_name}</Text>
        </View>
        <View style={{ position: "absolute", right: 0 }}>
          {showContent ? (
            <Ionicons name="md-chevron-down" size={35} color={COLORS.Black} />
          ) : (
            <Ionicons
              name="chevron-forward-sharp"
              size={35}
              color={COLORS.Black}
            />
          )}
        </View>
      </TouchableOpacity>
      {showContent && (
        <View style={{ marginTop: 10 }}>
          <View style={styles.priorityTypeWrapper}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                backgroundColor: COLORS.Blue,
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Create Discussion
              </Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
              >
                <View
                  style={{
                    height: 250,
                    width: "90%",
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.3,
                    elevation: 100,
                  }}
                >
                  <View style={{ marginTop: 30, marginLeft: 20 }}>
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        Title:
                      </Text>
                      <TextInput
                        value={title}
                        placeholder="Enter Title"
                        style={{
                          borderColor: "#000",
                          borderWidth: 1,
                          height: 40,
                          width: "90%",
                          paddingLeft: 10,
                          borderRadius: 5,
                          marginTop: 5,
                        }}
                      />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        Comment:
                      </Text>
                      <TextInput
                        placeholder="Comment"
                        multiline={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setComment(text)}
                        style={{
                          borderColor: "#000",
                          borderWidth: 1,
                          height: 40,
                          width: "90%",
                          paddingLeft: 10,
                          borderRadius: 5,
                          marginTop: 5,
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ alignItems: "flex-end", marginRight: 30 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text
                          style={{
                            color: COLORS.Red,
                            fontSize: 16,
                            fontWeight: "bold",
                            marginRight: 30,
                          }}
                        >
                          Cancel
                        </Text>
                      </Pressable>
                      <Pressable onPress={() => createDiscusssion()}>
                        <Text
                          style={{
                            color: COLORS.Blue,
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                        >
                          Create
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            {/* <Text style={styles.issueType}>{item.type}</Text> */}
            <View style={styles.priorityContainer}>
              <Text style={{ color: COLORS.Red }}>{item.priority}</Text>
            </View>
          </View>
          <Text style={styles.issuesDescription}>{item.description}</Text>
        </View>
      )}
    </View>
  );
};

export default IssuesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Lightgray,
    padding: 10,
    borderRadius: 15,
    shadowColor: COLORS.Black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  touchableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  issueTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.Black,
  },
  projectName: {
    fontWeight: "bold",
    fontSize: 12,
    color: COLORS.Red,
  },
  priorityTypeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  issueType: {
    fontWeight: "bold",
    color: COLORS.Blue,
  },
  priorityContainer: {
    borderColor: COLORS.Blue,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  issuesDescription: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
  },
});
