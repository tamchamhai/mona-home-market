import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const InputHeader = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.searchIconContainer}>
        <Ionicons name="search-outline" size={17} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconContainer: {
    backgroundColor: "#fff",
    height: 30,
    padding: 5,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
  searchIcon: { marginRight: 10 },
  input: {
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    width: 190,
    height: 30,
    paddingLeft: 10,
  },
});
