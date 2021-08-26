import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import ButtonDrawerMenu, { ButtonDrawerPhone } from "../components/Button";
import { InputHeader } from "../components/Input";
import CustomDrawerContent from "../navigator/CustomDrawerContent";
import { stylesSheet } from "../components/Styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  DataCarousel,
  DataSlideBar,
  DataCommodities,
} from "../components/Data";
import Swiper from "react-native-swiper";
import { color } from "../components/Styles";

const HomeScreen = ({ navigation }) => {
  const renderListInfomation = () =>
    DataCarousel.map((item, index) => (
      <TouchableOpacity
        style={styles.recruitmentContainer}
        key={index}
        onPress={() => {
          navigation.navigate("ProfileNavigator");
        }}
      >
        <Image source={item} style={styles.recruitmentImage} />
        <Text style={styles.recruitmentText}>
          Cuối tuẩn phủ phê với nồi "lẩu mắm" chính hiệu miển Tây
        </Text>
      </TouchableOpacity>
    ));

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.sliderContainer}>
        <SliderBox
          style={styles.sliderBox}
          images={DataCarousel}
          sliderBoxHeight={250}
          autoplay={true}
          circleLoop={true}
          dotStyle={styles.dotStyle}
          onCurrentImagePressed={(index) => navigation.navigate("Profile")}
          currentImageEmitter={(index) => {}}
        />
      </View>
      {/*  */}
      <FlatList
        horizontal
        keyExtractor={(_, index) => index.toString()}
        style={styles.slidebar}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={DataSlideBar}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.slidebarItem}>
            <MaterialCommunityIcons
              name={item.iconName}
              size={40}
              color={item.color}
            />
            <Text style={styles.slidebarItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/*  */}
      <View style={styles.commodities}>
        {DataCommodities.map((item, index) => {
          return (
            <View key={index}>
              <View style={styles.commoditiesHeader}>
                <Text style={styles.commoditiesTitle}>{item.title}</Text>
                <TouchableOpacity
                  style={styles.commoditiesShowMore}
                  onPress={() => {
                    navigation.navigate({
                      name: "CatagoriesScreen",
                      params: { screen: "HomeNavigator", item: item },
                    });
                  }}
                >
                  <Text style={{ paddingRight: 5, color: "#fff" }}>
                    Xem tất cả{"    "}
                    <FontAwesome name="angle-right" size={20} color="#fff" />
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={item.goods}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listProductItem}
                    key={index}
                    onPress={() => {
                      navigation.navigate({
                        name: "DetailScreen",
                        params: { screen: "HomeNavigator", item: item },
                      });
                    }}
                  >
                    <Image source={item.image} style={styles.productImage} />
                    <Text
                      style={styles.productName}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <Text style={styles.productUnit}>{item.unit}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          );
        })}
      </View>
      {/*  */}
      <View>
        <View style={styles.commoditiesHeader}>
          <Text style={styles.commoditiesTitle}>Tuyển dụng - Tin tức</Text>
          <TouchableOpacity style={styles.commoditiesShowMore}>
            <Text style={{ paddingRight: 5, color: "#fff" }}>
              Xem tất cả{"    "}
              <FontAwesome name="angle-right" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.commoditiesBody}>
          <Swiper
            style={{ height: 380 }}
            showsButtons={false}
            showsPagination={false}
          >
            {renderListInfomation()}
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
};

const HomeNavigator = (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={({ navigation, route }) => ({
          headerLeft: () => <ButtonDrawerMenu navigation={navigation} />,
          headerRight: () => <ButtonDrawerPhone />,
          headerTitle: () => <InputHeader />,
        })}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 55,
  },
  sliderContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
  },
  imgCarousel: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.4,
    resizeMode: "cover",
  },
  slidebar: {},
  slidebarItem: {
    backgroundColor: "#eee",
    height: 100,
    width: 120,
    marginLeft: 3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  slidebarItemTitle: {
    fontSize: 9,
    textTransform: "uppercase",
  },
  listProduct: {},
  dotStyle: {
    width: 20,
    height: 3,
  },
  sliderBox: {
    width: Dimensions.get("window").width - 20,
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  commoditiesHeader: {
    backgroundColor: color.primary,
    flex: 1,
    flexDirection: "row",
    padding: 15,
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  commoditiesTitle: {
    color: "#fff",
    fontSize: 16,
  },
  commoditiesShowMore: {
    color: "#fff",
    fontSize: 12,
  },
  listProductItem: {
    height: 240,
    width: 160,
    marginRight: 5,
    backgroundColor: "#eee",
  },
  productImage: {
    resizeMode: "cover",
    resizeMode: "cover",
    height: 170,
    width: 160,
  },
  productName: { padding: 5 },
  productPrice: {
    color: color.primary,
    paddingLeft: 5,
  },
  productUnit: {
    backgroundColor: color.iconActive,
    position: "absolute",
    top: 0,
    right: 0,
    textTransform: "capitalize",
    padding: 5,
    marginTop: 5,
  },
  recruitmentContainer: {
    width: Dimensions.get("window").width,
    height: 360,
    padding: 8,
  },
  recruitmentImage: {
    width: Dimensions.get("window").width - 16,
    resizeMode: "cover",
    height: 300,
    borderRadius: 10,
  },
  recruitmentText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default HomeNavigator;
