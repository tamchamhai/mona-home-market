import React from "react";
import {
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchHeader from "../components/SearchHeader";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { DataTag, DataCommodities } from "../components/Data";

const SearchScreen = ({ navigation }) => {
  const [listTagSearch, setListTagSearch] = React.useState([]);
  const [isTagActive, setIsTagActive] = React.useState(0);
  const [listItemSearched, setListItemSearched] = React.useState([]);

  const filterItems = () => {
    const temp = [...DataCommodities[0].goods];
    return temp.filter(
      (el) =>
        el.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D")
          .toLowerCase()
          .indexOf(
            listTagSearch[isTagActive]
              ?.normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .toLowerCase()
          ) !== -1
    );
  };
  // console.log("temp", temp);

  React.useEffect(() => {
    console.log(filterItems());
  }, [isTagActive]);

  const preSearch = () => {
    return (
      <>
        <View style={stylesSheet.headerStyleSheet}>
          <SearchHeader
            setListTagSearch={setListTagSearch}
            listTagSearch={listTagSearch}
            setIsTagActive={setIsTagActive}
            filterItems={filterItems}
            setListItemSearcheds={setListItemSearched}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
          <Text style={styles.text}>Không có kết quả phù hợp!</Text>
        </View>
      </>
    );
  };

  const affterSearch = () => {
    return (
      <>
        <View style={stylesSheet.headerStyleSheet}>
          <SearchHeader
            setListTagSearch={setListTagSearch}
            listTagSearch={listTagSearch}
            setIsTagActive={setIsTagActive}
            filterItems={filterItems}
            setListItemSearched={setListItemSearched}
          />
        </View>
        <ScrollView
          style={{
            marginTop: 5,
            marginBottom: 55,
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <View style={styles.tagContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>Mơi đây?</Text>
              <TouchableOpacity
                onPress={() => {
                  setListTagSearch([]);
                }}
              >
                <FontAwesome name="trash-o" size={18} />
              </TouchableOpacity>
            </View>
            {/*  */}
            <View style={styles.tags}>
              {listTagSearch.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setIsTagActive(index);
                    }}
                    style={[
                      index === isTagActive
                        ? styles.tagActive
                        : styles.tagInActive,
                      { marginBottom: 5 },
                    ]}
                  >
                    <Text
                      style={{
                        color: color.primary,
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {/*  */}
          <View style={styles.listItemContainer}>
            {listItemSearched.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.itemContainer}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                        width: Dimensions.get("window").width - 120,
                      }}
                    >
                      {item.name}
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <Text style={{ fontSize: 20 }}>{item.price}</Text>
                      <Text style={{ fontSize: 16 }}>/{item.unit}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  };

  return <>{listTagSearch.length !== 0 ? affterSearch() : preSearch()}</>;
};

const SearchNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerStyle: stylesSheet.headerStyleSheet,
        })}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: () => (
              <SearchHeader setListTagSearch={setListTagSearch} />
            ),
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 16 },
  tagActive: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.primary,
    padding: 5,
    marginRight: 5,
  },
  tagInActive: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#ddd",
    padding: 5,
    marginRight: 5,
  },
  tags: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#ddd",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
export default SearchNavigator;
