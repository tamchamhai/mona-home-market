import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "../views/Home";
import SearchNavigator from "../views/Search";
import CommoditiesNavigator from "../views/Commodities";
import ProfileNavigator from "../views/Profile";
import ContactScreen from "../views/Contact";
import IntroScreen from "../views/Intro";

import ButtonDrawerMenu from "../components/Button";

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import CustomTabBarContent from "./CustomTabBarContent";
import CartNavigator, {
  CartScreen,
  DiliveryScreen,
  OrderScreen,
  PaymentScreen,
} from "../views/Cart";
import DetailScreen from "../views/DetailScreen";
import CatagoriesScreen from "../views/CatagoriesScreen";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="IntroScreen"
        tabBar={(props) => <CustomTabBarContent {...props} />}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#2c994b",
          tabBarInactiveBackgroundColor: "#2c994b",
          tabBarIcon: ({ focused, size }) => {
            let iconColor;
            let iconName;
            const color = { inActive: "white", active: "#f3bd5b" };

            if (route.name === "HomeNavigator") {
              iconColor = focused ? color.active : color.inActive;
              iconName = "home";
              // You can return any component that you like here!
              return <AntDesign name={iconName} size={20} color={iconColor} />;
            } else if (route.name === "Search") {
              iconColor = focused ? color.active : color.inActive;
              iconName = "search1";
              // You can return any component that you like here!
              return <AntDesign name={iconName} size={20} color={iconColor} />;
            } else if (route.name === "CommoditiesNavigator") {
              iconColor = focused ? color.active : color.inActive;
              iconName = "appstore-o";
              // You can return any component that you like here!
              return <AntDesign name={iconName} size={20} color={iconColor} />;
            } else if (route.name === "CartNavigator") {
              iconColor = focused ? color.active : color.inActive;
              iconName = "shoppingcart";
              // You can return any component that you like here!
              return <AntDesign name={iconName} size={20} color={iconColor} />;
            } else if (route.name === "ProfileNavigator") {
              iconColor = focused ? color.active : color.inActive;
              iconName = "md-person-outline";
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={20} color={iconColor} />;
            }
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "white",
            borderTopWidth: 2,
          },
        })}
      >
        <Tab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Trang ch???",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="SearchNavigator"
          component={SearchNavigator}
          options={{
            tabBarLabel: "Ti???m ki???m",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="CommoditiesNavigator"
          component={CommoditiesNavigator}
          options={{
            tabBarLabel: "Ng??nh h??ng",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="CartNavigator"
          component={CartNavigator}
          options={{
            tabBarLabel: "Gi??? h??ng",
            headerStyle: styles.headerStyleSheet,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ProfileNavigator"
          component={ProfileNavigator}
          options={{
            tabBarLabel: "T??i kho???n",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="CatagoriesScreen"
          component={CatagoriesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerLeft: false }}
        />
        <Tab.Screen
          name="DiliveryScreen"
          component={DiliveryScreen}
          options={{ headerLeft: false }}
        />
        <Tab.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ headerLeft: false }}
        />
        <Tab.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{ headerLeft: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default AppNavigator;
