import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ButtonDrawerMenu from "../components/Button";
import CustomDrawerContent from "../navigator/CustomDrawerContent";
import { stylesSheet } from "../components/Styles";
import { DataCommodities, HeaderLogo } from "../components/Data";
import { useSelector } from "react-redux";

const CommoditiesScreen = ({ route, navigation }) => {
  const { category } = useSelector((state) => state.categories);
  return (
    <View
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={category}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate({
                name: "CatagoriesScreen",
                params: { screen: "CommoditiesNavigator", item: item },
              });
            }}
          >
            <Image
              source={item.imageCommodities}
              style={styles.imageCommodities}
              // blurRadius={5}
            />
            <View style={styles.textContainer}></View>
            <Text style={styles.titleCommodities}>{item.title}</Text>
            <Text style={styles.numCommodities}>
              {item.goods.length} Sản phẩm
            </Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => {
          return (
            <View>
              <TouchableOpacity style={styles.itemContainer}>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={styles.imageCommodities}
                  // blurRadius={5}
                />
                <View style={styles.textContainer}></View>
                <Text style={styles.titleCommodities}>khuyến mãi hot</Text>
                <Text style={styles.numCommodities}>Click xem ngay</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const CommoditiesNavigator = ({ navigation }) => {
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
          name="Commodities"
          component={CommoditiesScreen}
          options={{
            drawerLabel: "Trang chủ",
            headerStyle: stylesSheet.headerStyleSheet,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

const WidthScreen = Dimensions.get("window").width;
const HeghtScreen = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: { padding: 15, marginBottom: 50 },
  itemContainer: {
    width: WidthScreen - 30,
    height: 150,
    marginBottom: 20,
  },
  imageCommodities: {
    width: WidthScreen - 30,
    height: 150,
  },
  titleCommodities: {
    position: "absolute",
    top: "35%",
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    marginLeft: 20,
    marginRight: 20,
  },
  numCommodities: {
    position: "absolute",
    top: "55%",
    color: "#fff",
    marginLeft: 20,
    marginRight: 20,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: "#222",
    opacity: 0.4,
    width: WidthScreen - 30,
    height: 150,
    position: "absolute",
    top: 0,
  },
});
export default CommoditiesNavigator;
