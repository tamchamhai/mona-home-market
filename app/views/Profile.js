import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../navigator/CustomDrawerContent";
import ButtonDrawerMenu from "../components/Button";
import { HeaderLogo } from "../components/Data";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <View>
          <Image
            source={require("../assets/images/avataaars.png")}
            style={styles.avatarImage}
          />
        </View>
        <View style={styles.avatarText}>
          <Text style={styles.avatarCap}>Chào bạn</Text>
          <Button title="Đăng nhập" color={color.primary} onPress={() => {}} />
        </View>
      </View>
      {/*  */}
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text>Nhận thông báo</Text>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: color.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.item}>
          <Text>Khuyến mãi</Text>
          <Text>
            <FontAwesome name="angle-right" size={15} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Hướng dẫn đặt hàng</Text>
          <Text>
            <FontAwesome name="angle-right" size={15} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Chính sách đổi trả</Text>
          <Text>
            <FontAwesome name="angle-right" size={15} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Giao hàng và thanh toán</Text>
          <Text>
            <FontAwesome name="angle-right" size={15} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Liên hệ</Text>
          <Text>
            <FontAwesome name="angle-right" size={15} />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ProfileNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={({ navigation, route }) => ({
          headerLeft: () => <ButtonDrawerMenu navigation={navigation} />,
          headerTitle: () => <HeaderLogo />,
        })}
      >
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerLabel: "Trang chủ",
            headerStyle: stylesSheet.headerStyleSheet,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  avatarContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 8,
    borderColor: "#eee",
  },
  avatarImage: {
    width: 120,
    height: 140,
    resizeMode: "cover",
  },
  avatarText: {
    flex: 1,
    alignItems: "center",
  },
  avatarCap: {
    fontSize: 30,
    textAlign: "center",
  },
  login: { color: "#000", fontSize: 12 },
  itemContainer: {},
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#eee",
  },
});
export default ProfileNavigator;
