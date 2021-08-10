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

const SearchHeader = ({
  setListTagSearch,
  listTagSearch,
  setIsTagActive,
  filterItems,
}) => {
  const [width_ele, setWidth] = React.useState();
  const [height_ele, setHeight] = React.useState();
  const [currentSearchKey, setCurrentSearchKey] = React.useState("");
  const onChangeText = (value) => {
    setCurrentSearchKey(value);
  };
  const onSubmitEditing = (event) => {
    const temp = [...listTagSearch];
    temp.unshift(event.nativeEvent.text);
    setListTagSearch(temp);
    setIsTagActive(0);
  };

  const find_dimesions = (layout) => {
    const { x, y, width, height } = layout;
    setWidth(width);
    setHeight(height);
  };

  return (
    <View
      style={{
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
        top: 20,
        left: (Dimensions.get("window").width - 335) / 2,
      }}
      onLayout={(event) => find_dimesions(event.nativeEvent.layout)}
    >
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
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
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
    top: 20,
    // left: -Dimensions.get("window").width * 0.3,
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
