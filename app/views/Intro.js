import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import ButtonDrawerMenu from "../components/Button";
import { HeaderLogo } from "../components/Data";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const IntroScreen = ({ navigation }) => {
  data = [
    { iconName: "fruit-cherries", name: "dầu ăn" },
    { iconName: "fruit-cherries-off", name: "dầu ăn" },
    { iconName: "fruit-citrus", name: "dầu ăn" },
    { iconName: "fruit-citrus-off", name: "dầu ăn" },
    { iconName: "fruit-grapes", name: "dầu ăn" },
    { iconName: "fruit-grapes-outline", name: "dầu ăn" },
    { iconName: "fruit-pineapple", name: "dầu ăn" },
    { iconName: "fruit-watermelon", name: "dầu ăn" },
    { iconName: "fruit-citrus", name: "dầu ăn" },
    { iconName: "fruit-cherries", name: "dầu ăn" },
  ];
  return (
    <>
      {/* Header */}
      <View
        style={[
          stylesSheet.headerStyleSheet,
          {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={styles.headerLeft}>
          <ButtonDrawerMenu navigation={navigation} />
        </View>
        {/*  */}
        <View style={styles.headerTitle}>
          <HeaderLogo />
        </View>
        {/*  */}
        <View style={{ width: "25%" }}></View>
      </View>
      {/* Body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 55 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <View style={{ width: "50%" }}>
            <HeaderLogo />
          </View>
          {/*  */}
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text>
                <AntDesign name="search1" size={20} />
              </Text>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity>
              <Text>
                <AntDesign name="shoppingcart" size={20} />
              </Text>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity>
              <Text>
                <Ionicons name="person-outline" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            height: 50,
            backgroundColor: color.primary,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View
            style={{
              backgroundColor: color.light,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 15,
            }}
          >
            <Pressable
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                console.log("press 1");
              }}
            >
              <FontAwesome name="spotify" size={20} color="#fff" />
              <Text
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Danh mục sản phẩm
              </Text>
            </Pressable>
          </View>
          {/*  */}
          <View>
            <Pressable>
              <Text>
                <Foundation name="list" size={20} color="#fff" />
              </Text>
            </Pressable>
          </View>
        </View>
        {/* Categories */}
        {/* <SafeAreaView style={{ height: 200, width: "100%", flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            renderItem={({ item }) => (
              <View>
                <Text>
                  <MaterialCommunityIcons name={item.iconName} size={50} />
                </Text>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </SafeAreaView> */}
        {/* Introduction */}
        <View>
          {/* Path */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Pressable>
              <Text>Trang chủ </Text>
            </Pressable>
            <Text>
              <FontAwesome name="angle-right" size={15} color={color.primary} />
            </Text>
            <Text style={{ fontWeight: "bold" }}> Giới thiệu</Text>
          </View>
          {/* Intro content */}
          <View style={{}}>
            <Text
              style={[
                styles.text,
                styles.textUppercase,
                { fontSize: 22, fontWeight: "bold", padding: 20 },
              ]}
            >
              siêu thị trong nhà
            </Text>
            <Text
              style={[
                styles.text,
                styles.textUppercase,
                {
                  color: color.primary,
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 10,
                },
              ]}
            >
              câu chuyện ngắn từ chúng tôi
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 20, padding: 15, paddingBottom: 0, lineHeight: 28 },
              ]}
            >
              Hệ thống{" "}
              <Text style={{ textTransform: "uppercase" }}>
                siêu thị trong nhà
              </Text>
              (Market In Your House) được thành lập từ tháng 6 năm 2020.
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 20, padding: 15, paddingBottom: 0, lineHeight: 28 },
              ]}
            >
              Là chuỗi cung ứng tất cả hàng hóa đến tận nhà khách hàng với tiêu
              chí{" "}
              <Text style={{ textTransform: "uppercase" }}>
                tiết kiêm nhất-tiện lợi nhất-chất lượng nhất.
              </Text>
            </Text>
            {/*  */}
            <View style={{ marginTop: 30 }}>
              <Text style={styles.textTitle}>1. Mục tiêu</Text>
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Image
                  source={require("../assets/images/carousel-one.jpg")}
                  style={{
                    height: 300,
                    borderRadius: 20,
                    width: "100%",
                  }}
                />
              </View>
            </View>
            {/*  */}
            <View style={{ marginTop: 30 }}>
              <Text style={styles.textTitle}>2. Tầm nhìn</Text>
              <Text style={{ fontSize: 20, padding: 10, lineHeight: 28 }}>
                Trong mỗi gia đình của người Việt Nam đều có một SIÊU THỊ TRONG
                NHÀ
              </Text>
            </View>
            {/*  */}
            <View style={{ marginTop: 30 }}>
              <Text style={styles.textTitle}>3. Cam kết</Text>
              <View style={{ flex: 2, flexWrap: "wrap", flexDirection: "row" }}>
                <View
                  style={{ alignItems: "center", width: "50%", padding: 10 }}
                >
                  <MaterialCommunityIcons
                    name="cow"
                    size={100}
                    color={color.primary}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Thực phẩm tươi ngon
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      lineHeight: 25,
                    }}
                  >
                    Chúng tôi mong muốn hàng hóa giao đến khách hàng luôn tươi
                    mới, đảm bảo sức khỏe.
                  </Text>
                </View>
                {/*  */}
                <View
                  style={{ alignItems: "center", width: "50%", padding: 10 }}
                >
                  <MaterialCommunityIcons
                    name="fruit-watermelon"
                    size={100}
                    color={color.primary}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Tối giảm chi phí bữa ăn
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      lineHeight: 25,
                    }}
                  >
                    Miễn phí giao hàng và hàng hóa được cung cấp từ gốc,sẽ giảm
                    tối đa chi phí cho khách hàng.
                  </Text>
                </View>
                {/*  */}
                <View
                  style={{ alignItems: "center", width: "50%", padding: 10 }}
                >
                  <MaterialCommunityIcons
                    name="fruit-grapes-outline"
                    size={100}
                    color={color.primary}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Nhanh chóng tiện lợi
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      lineHeight: 25,
                    }}
                  >
                    Đội ngủ chăm sóc khách hàng và giao hàng luôn luôn sẵn sàng
                    phục vụ 24/7
                  </Text>
                </View>
                {/*  */}
                <View
                  style={{ alignItems: "center", width: "50%", padding: 10 }}
                >
                  <MaterialCommunityIcons
                    name="flower-outline"
                    size={100}
                    color={color.primary}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Đa dạng hàng hóa
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      lineHeight: 25,
                    }}
                  >
                    Không cần đi đâu xa, siêu thị ngay trong nhà bạn.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Number */}
        <View style={styles.numWrap}>
          <View style={styles.numWrapItem}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                100
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              >
                %
              </Text>
            </View>
            <Text
              style={[
                styles.textUppercase,
                { color: "white", fontWeight: "bold", marginTop: 10 },
              ]}
            >
              chất lượng sản phẩm
            </Text>
          </View>
          {/*  */}
          <View style={styles.numWrapItem}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                10
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              >
                +
              </Text>
            </View>
            <Text
              style={[
                styles.textUppercase,
                { color: "white", fontWeight: "bold", marginTop: 10 },
              ]}
            >
              trung tâm khách hàng
            </Text>
          </View>
          {/*  */}
          <View style={styles.numWrapItem}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                563
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              >
                +
              </Text>
            </View>
            <Text
              style={[
                styles.textUppercase,
                { color: "white", fontWeight: "bold", marginTop: 10 },
              ]}
            >
              khách hàng
            </Text>
          </View>
          {/*  */}
          <View style={styles.numWrapItem}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                500
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              >
                +
              </Text>
            </View>
            <Text
              style={[
                styles.textUppercase,
                { color: "white", fontWeight: "bold", marginTop: 10 },
              ]}
            >
              sản phẩm cung cấp
            </Text>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  text: {
    color: "black",
    textAlign: "center",
  },
  textTitle: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  textUppercase: { textTransform: "uppercase" },
  headerLeft: { width: "25%", marginLeft: -25, marginBottom: -20 },
  headerTitle: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
    marginLeft: 25,
  },
  numWrap: {
    backgroundColor: color.primary,
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  numWrapItem: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    width: "50%",
  },
});
export default IntroScreen;
