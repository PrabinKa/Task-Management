import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { GetSelectedTab } from '../redux/SelectTab/SelectedTab'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const DrawerHeader = () => {
    const navigation = useNavigation()
    const selectedTab = useSelector(state => state.drawerScreen.TabScreen)
  return (
    <View style={styles.backButtonContainer}>
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
      style={{ marginLeft: 5 }}
    >
      <Image
        source={require("../../assets/menu.png")}
        style={{ height: 30, width: 30 }}
      />
    </TouchableOpacity>
    <View style={{ justifyContent: "center", marginLeft: 30 }}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>{selectedTab}</Text>
    </View>
  </View>
  )
}

export default DrawerHeader;

const styles = StyleSheet.create({
    backButtonContainer: {
        marginTop: 10,
        flexDirection: "row",
        marginLeft: 5,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
      },
})