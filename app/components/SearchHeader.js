import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchHeader = () => {
  const [currentSearchKey, setCurrentSearchKey] = React.useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>
          <AntDesign name="search1" size={20} style={styles.button} />
        </Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        autoFocus={true}
        clearButtonMode="always"
        placeholder="Tìm theo tên sản phẩm "
      />
      <TouchableOpacity>
        <Text>
          <Entypo name="sound-mix" size={15} style={styles.button} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    position: "absolute",
    top: -30,
    // left: -Dimensions.get("window").width * 0.3,
    left: -165,
  },
  input: {
    width: 260,
    height: 25,
    marginLeft: 10,
    marginRight: 10,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  button: {
    backgroundColor: "#fff",
  },
});

export default SearchHeader;
