import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Linking } from "react-native";

const ButtonDrawerMenu = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.toggleDrawer();
      }}
      style={{
        marginLeft: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: -8 }}>
        <Ionicons name="menu-outline" size={30} color="#fff" />
      </Text>
      <Text style={{ color: "#fff", fontSize: 12, marginBottom: 5 }}>Menu</Text>
    </TouchableOpacity>
  );
};
// ButtonDrawerMenu();
export default ButtonDrawerMenu;

export const ButtonDrawerPhone = () => {
  const phoneNumber = "0802020202";
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Onpress the phone");
        Linking.openURL(`tel:${phoneNumber}`);
      }}
      style={{
        marginRight: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 0 }}>
        <MaterialCommunityIcons
          name="phone-in-talk-outline"
          size={25}
          color="white"
        />
      </Text>
      <Text style={{ color: "white", fontSize: 12, marginBottom: 5 }}>
        Liên hệ
      </Text>
    </TouchableOpacity>
  );
};
