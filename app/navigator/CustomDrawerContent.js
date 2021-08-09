import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "90%" }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.logoContainer}>
            <Text>Content one</Text>
          </View>

          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              //   Linking.openURL("...");
              props.navigation.navigate("Contact");
              props.navigation.closeDrawer();
            }}
          >
            <AntDesign
              style={styles.iconStyle}
              name={"shoppingcart"}
              size={25}
              color={"black"}
            />

            <Text style={styles.drawerText}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              //   Linking.openURL("...");
              console.log(props.navigation.navigate("Contact"));
            }}
          >
            <AntDesign
              style={styles.iconStyle}
              name={"contacts"}
              size={25}
              color={"black"}
            />

            <Text style={styles.drawerText}>Contact Us</Text>
          </TouchableOpacity>

          {/* Tried just disabling using DrawerItemList but wasn't working so made
                        complete custom drawer component and navigate properly using props.navigation.navigate */}
          {/* <DrawerItemList 
                            {...props}
                        /> */}

          <TouchableOpacity
            style={styles.contactUsContainer}
            onPress={() => {
              console.log(props.navigation.navigate("Contact"));
            }}
          >
            <EvilIcons name={"question"} size={30} color={"black"} />
            <Text style={styles.drawerText}>FAQ</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </View>

      <TouchableOpacity style={styles.logoutContainer} onPress={() => {}}>
        <Text style={styles.logoutText}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const drawerStyle = {
  activeTintColor: "black",
  inactiveTintColor: "black",
  labelStyle: {
    // fontFamily: "montserrat",
    marginVertical: 16,
    marginHorizontal: 0,
  },
  iconContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {},
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    width: "100%",
    // height: moderateScale(50),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    padding: 5,
  },
  image: {
    resizeMode: "contain",
    width: "80%",
    height: "100%",
  },
  contactUsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    paddingLeft: 15,
  },
  logoutContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  drawerText: {
    // fontFamily: "montserrat",
    marginLeft: 16,
  },
  logoutText: {
    // fontFamily: "montserrat",
    color: "#b23b3b",
  },
});

export default CustomDrawerContent;
