import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/Constants";

const ProjectCard = ({ containerStyle, item, onPress }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.projectName}>{item.project_name}</Text>
        <View style={styles.statusWrapper}>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.projectHead}>{item.project_head}</Text>
        <View style={styles.priorityWrapper}>
          <Text style={{ color: COLORS.Red, fontWeight: "600" }}>
            {item.priority}
          </Text>
        </View>
        <Text style={styles.date}>{item.completion_date}</Text>
      </View>
      <View style={{ alignSelf: "flex-start" }}>
        <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Lightgray,
    borderRadius: 15,
    justifyContent: "space-between",
    padding: 10,
    shadowColor: COLORS.Black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  projectName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusWrapper: {
    backgroundColor: COLORS.Red,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  status: {
    fontWeight: "bold",
    fontSize: 12,
    color: COLORS.White,
  },
  projectHead: {
    fontWeight: "600",
    fontSize: 14,
  },
  priorityWrapper: {
    borderColor: COLORS.Blue,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  date: {
    fontWeight: "600",
    fontSize: 14,
  },
  viewContainer: {
    backgroundColor: COLORS.Lightblue,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  viewText: {
    color: COLORS.Blue,
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
  },
});
