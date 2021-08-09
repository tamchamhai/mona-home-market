import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import { color } from "../components/Styles";

function MyTabBar({ state, descriptors, navigation }) {
  const temp = state.routes.filter((item, index) => index < 5);
  const listIcon = [
    "home",
    "search1",
    "appstore-o",
    "shoppingcart",
    "md-person-outline",
  ];
  return (
    <View style={styles.container}>
      {temp.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
            key={index}
          >
            {index <= 3 ? (
              <AntDesign
                name={listIcon[index]}
                size={20}
                color={isFocused ? color.iconActive : color.iconInactive}
              />
            ) : (
              <Ionicons
                name={listIcon[index]}
                size={20}
                color={isFocused ? color.iconActive : color.iconInactive}
              />
            )}
            <Text style={styles.title}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: "#2c994b",
    position: "absolute",
    bottom: 0,
  },
  item: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
  title: {
    color: "#fff",
    fontSize: 12,
  },
});

export default MyTabBar;
