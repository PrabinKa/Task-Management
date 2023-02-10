import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "@env"

const User = () => {
  const data = useSelector((state) => state.users.Details);
  const [userData, setUserData] = React.useState([data]);

  // console.warn("data", userData)

  return (
    <View>
      <FlatList
        data={userData}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // console.warn("image", item.image)
          return (
            <View key={index} style={{paddingHorizontal: 20, paddingVertical: 10, paddingBottom: 50}}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={{uri: `${BASE_URL}images/${item.image}`}}
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                />
                <View style={{ justifyContent: "center", marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.full_name}
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "600" }}>
                    {item.email}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  marginVertical: 20,
                  backgroundColor: "#fff",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/role.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Role:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.role}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/designation.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Designation:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.designation}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/section.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Section:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.section}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/department.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Department:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.department}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/subdepartment.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Sub-Department:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.designation}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/address.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Address:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.address}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/mobile.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Mobile No:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.mobile_no}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/telephone.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Phone No:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.phone_no}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/gender.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      Gender:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.gender}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    borderBottomColor: "#F3F3F3",
                    borderBottomWidth: 1,
                    marginBottom: 5,
                    paddingBottom: 5,
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/dob.png")}
                      style={{ height: 40, width: 30, tintColor: "#1569c7" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#828282",
                      }}
                    >
                      D.O.B:
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.date_of_birth}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default User;
