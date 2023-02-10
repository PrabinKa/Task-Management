import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "react-native-circular-progress-indicator";
import { COLORS } from "../constants/Constants";

const ProjectDetails = () => {
  const data = useSelector((state) => state.projects.Details);

  // console.warn("data", data)

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
        <View style={styles.statusWrapper}>
          <Text style={styles.status}>{data.status}</Text>
        </View>
      </View>

      {/* projectname */}
      <Text style={styles.projectName}>{data.project_name}</Text>

      {/* project head and priority */}
      <View style={styles.projectHeadContainer}>
        <View style={{ justifyContent: "space-around" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#888" }}>
            {data.project_head}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#888" }}>
            {data.start_date}
          </Text>
        </View>
        <View>
          <CircularProgress
            radius={25}
            value={data.progress}
            textColor={COLORS.Red}
            progressValueColor="#888"
            fontSize={18}
            activeStrokeWidth={8}
            inActiveStrokeWidth={8}
            valueSuffix={"%"}
            activeStrokeColor={COLORS.Blue}
            inActiveStrokeColor={COLORS.Blue}
            inActiveStrokeOpacity={0.2}
          />
        </View>
      </View>

      {/* description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={{ fontWeight: "800", color: "#888" }}>{data.description}</Text>
      </View>

      {/* other details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>Client:</Text>
          <Text style={styles.content}>{data.client}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>Teams:</Text>
          <Text style={styles.content}>
            Prabin Karki, Nabin Bhandari, Sangeeta Thapa, Namrata Chaudhary,
            Kusum Basnet
          </Text>
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>Due date:</Text>
          <Text style={styles.content}>{data.completion_date}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>Priority:</Text>
          <Text style={styles.content}>{data.priority}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  statusWrapper: {
    backgroundColor: COLORS.Red,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.White,
  },
  projectName: {
    fontSize: 18,
    fontWeight: "700",
  },
  projectHeadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    marginVertical: 10,
    borderTopColor: COLORS.Darkgray,
    borderBottomColor: COLORS.Darkgray,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.Red,
  },
  detailsContainer: {
    backgroundColor: COLORS.White,
    borderRadius: 5,
    padding: 5,
    shadowColor: COLORS.Black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    elevation: 5,
    marginVertical: 10,
  },
  detailsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.Blue,
  },
  content: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "500",
  },
});
