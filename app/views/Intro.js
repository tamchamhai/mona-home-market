import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import ButtonDrawerMenu from "../components/Button";
import { HeaderLogo } from "../components/Data";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Linking } from "react-native";
import AnimateNumber from "react-native-animate-number";

const IntroScreen = ({ navigation }) => {
  const numAnimated = React.useRef(new Animated.Value(0)).current;
  const scrollRef = React.useRef(null);
  const phoneNumberOne = "0988188507";
  const phoneNumberTwo = "0768170180";
  const phoneNumberThree = "02862901182";
  const phoneNumberFour = "0988188507";
  const phoneNumberFire = "0909902401";
  const data = [
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
  const whyChooseData = [
    {
      iconName: "city-variant",
      text: "Sản phẩm chất lượng",
    },
    {
      iconName: "caravan",
      text: "Luôn tươi ngon",
    },
    {
      iconName: "cannabis",
      text: "100% thiên nhiên",
    },
    {
      iconName: "death-star-variant",
      text: "Sản phẩm gốc",
    },
    {
      iconName: "digital-ocean",
      text: "Dinh dưỡng",
    },
    {
      iconName: "fire-hydrant",
      text: "Chất lượng cao",
    },
    {
      iconName: "city-variant",
      text: "Sản phẩm chất lượng",
    },
  ];
  console.log(scrollRef);
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
      <Animated.ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 55 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: numAnimated } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
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
              {/* <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                100
              </Text> */}
              <AnimateNumber
                value={100}
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                timing="linear"
                countBy={1}
              />
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
              {/* <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                10
              </Text> */}
              <AnimateNumber
                value={10}
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                timing="linear"
                countBy={1}
              />
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
              {/* <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                563
              </Text> */}
              <AnimateNumber
                value={563}
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                timing="linear"
                countBy={400}
              />
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
              {/* <Text
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                500
              </Text> */}
              <AnimateNumber
                value={500}
                style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                timing="linear"
                countBy={10}
              />
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
        </View>
        {/* Why choose */}
        <View>
          <Text style={styles.chooseText}>Tại sao chọn chúng tôi</Text>
          <View>
            {whyChooseData.map((item, index) => (
              <View key={index} style={styles.chooseItem}>
                <Text style={styles.chooseItemIcon}>
                  <MaterialCommunityIcons
                    name={item.iconName}
                    size={60}
                    color={color.primary}
                  />
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate({ name: "HomeNavigator" });
            }}
          >
            <View style={styles.chooseButton}>
              <Text style={styles.chooseButtonText}>mua sản phẩm ngay</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Sell off */}
        <View style={{ paddingHorizontal: 10, marginBottom: 30 }}>
          <Text
            style={[
              styles.chooseText,
              {
                marginTop: 60,
                marginBottom: 20,
              },
            ]}
          >
            Khuyến mãi hiện tại
          </Text>
          {/*  */}
          <View style={{ marginTop: 20 }}>
            <ImageBackground
              resizeMode="cover"
              source={require("../assets/images/food-one.jpg")}
              style={{ width: "100%", height: 250 }}
              imageStyle={{
                borderRadius: 20,
              }}
            >
              <View style={{ paddingTop: 50, paddingLeft: 30 }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: color.primary,
                    fontWeight: "bold",
                  }}
                >
                  Thưởng thức
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: color.iconActive,
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  Món ngon mỗi ngày
                </Text>
                <Pressable
                  style={styles.chooseButton}
                  onPress={() => {
                    navigation.navigate({ name: "HomeNavigator" });
                  }}
                >
                  <Text style={styles.chooseButtonText}>Mua sản phẩm ngay</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
          {/*  */}
          <View style={{ marginTop: 20 }}>
            <ImageBackground
              resizeMode="cover"
              source={require("../assets/images/food-two.jpg")}
              style={{ width: "100%", height: 250 }}
              imageStyle={{
                borderRadius: 20,
              }}
            >
              <View style={{ paddingTop: 50, paddingLeft: 30 }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: color.primary,
                    fontWeight: "bold",
                  }}
                >
                  Sơ chế sẵn
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: color.iconActive,
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  Đóng gói chân không
                </Text>
                <Pressable
                  style={styles.chooseButton}
                  onPress={() => {
                    navigation.navigate({ name: "HomeNavigator" });
                  }}
                >
                  <Text style={styles.chooseButtonText}>Mua sản phẩm ngay</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
          {/*  */}
          <View style={{ marginTop: 20 }}>
            <ImageBackground
              resizeMode="cover"
              source={require("../assets/images/food-three.jpg")}
              style={{ width: "100%", height: 250 }}
              imageStyle={{
                borderRadius: 20,
              }}
            >
              <View style={{}}>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 20,
                    }}
                  >
                    Đăng ký nhận khuyến mãi
                  </Text>
                  <Text
                    style={{
                      color: color.iconActive,
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    Hãy để lại số điện thoại của bạn, để nhận các ưu đãi hấp dẫn
                    nhé.
                  </Text>
                </View>
                {/*  */}
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <TextInput
                    placeholder="Đăng ký số điện thoại để nhận khuyến mãi"
                    style={{
                      width: "80%",
                      height: 40,
                      backgroundColor: "#fff",
                      borderRadius: 20,
                      paddingHorizontal: 20,
                    }}
                  />
                  <Pressable
                    style={[styles.chooseButton, { width: "80%" }]}
                    onPress={() => {}}
                  >
                    <Text style={styles.chooseButtonText}>Đăng ký ngay</Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
          {/*  */}
        </View>
        {/* About */}
        <View
          style={{
            backgroundColor: "#ccc",
            paddingHorizontal: 15,
            paddingVertical: 40,
          }}
        >
          <View>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>về chúng tôi</Text>
            </View>
            {/*  */}
            <View>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Giới thiệu</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Sản phẩm</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Tuyển dụng</Text>
              </Pressable>
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 30 }}>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>chính sách</Text>
            </View>
            {/*  */}
            <View>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Chính sách bảo mật</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Chính sách đổi trả</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Chính sách thanh toán</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Liên hệ</Text>
              </Pressable>
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 30 }}>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>khách hàng</Text>
            </View>
            {/*  */}
            <View>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Hướng dẫn đặt hàng</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Giao hàng và thanh toán</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Trung tâm khách hàng</Text>
              </Pressable>
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 30 }}>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>thời gian làm việc</Text>
            </View>
            {/*  */}
            <View>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Nhận đặt hàng: 24/7</Text>
              </Pressable>
              <Pressable style={{ marginBottom: 15 }}>
                <Text>Thời gian giao hàng:</Text>
                <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                  Do COVID-19 thời gian giao hàng có thể bị chậm trễ 2-3 ngày,
                  chúng tôi sẽ cố gắng giao hàng sớm nhất có thể. Kính mong quý
                  khách hàng thông cảm.
                </Text>
              </Pressable>
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 30 }}>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>đăng ký làm đối tác</Text>
            </View>
            {/*  */}
            <View>
              <TouchableOpacity
                style={{
                  marginBottom: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#999",
                  padding: 15,
                  borderRadius: 20,
                }}
                onPress={() => {
                  Linking.openURL(`tel:${phoneNumberOne}`);
                }}
              >
                <Text>
                  <Ionicons
                    name="ios-phone-portrait-outline"
                    size={20}
                    color={color.primary}
                  />
                </Text>
                <Text style={{ fontSize: 20 }}>{"   "}0988 188 507</Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: color.primary,
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginBottom: 15,
                  }}
                >
                  điện thoại lãnh đạo
                </Text>
                <Text style={{ color: "#fff" }}>
                  (Vui lòng phản hồi qua tin nhắn)
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(`tel:${phoneNumberTwo}`);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#fff",
                      marginTop: 15,
                      fontWeight: "bold",
                    }}
                  >
                    <Ionicons
                      name="ios-phone-portrait-outline"
                      size={15}
                      color="#fff"
                    />{" "}
                    0768 170 180{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 30 }}>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>điện thoại đặt hàng</Text>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: "#aaa",
                padding: 15,
                paddingBottom: 0,
                borderRadius: 20,
                paddingLeft: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${phoneNumberThree}`);
                }}
              >
                <Text style={{ marginBottom: 15 }}>
                  <MaterialCommunityIcons name="phone-classic" size={15} />
                  {"   "}028 6290 1182
                </Text>
              </TouchableOpacity>
              {/*  */}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${phoneNumberFour}`);
                }}
              >
                <Text style={{ marginBottom: 15 }}>
                  <MaterialCommunityIcons name="cellphone-iphone" size={15} />
                  {"   "}0988 188 507
                </Text>
              </TouchableOpacity>
              {/*  */}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${phoneNumberFire}`);
                }}
              >
                <Text style={{ marginBottom: 15 }}>
                  <MaterialCommunityIcons name="cellphone-iphone" size={15} />
                  {"   "}0909 902 401
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*  */}
          <View style={{ marginTop: 30 }}>
            <View style={styles.aboutTitle}>
              <Text style={styles.aboutTitleText}>được chứng nhận</Text>
            </View>
            {/*  */}
            <Image
              source={require("../assets/images/dathongbaobocongthuong.png")}
              style={{ height: 250, width: 300 }}
              resizeMode="cover"
            />
          </View>
        </View>
        {/*  */}
        <View
          style={{
            backgroundColor: color.primary,
            paddingHorizontal: 15,
            paddingVertical: 40,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textTransform: "uppercase",
              textAlign: "center",
              color: "#fff",
              marginBottom: 20,
            }}
          >
            market in your house - siêu thị ngay tại trong nhà bạn
          </Text>
          <Text
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: 14,
              marginBottom: 10,
            }}
          >
            công ty tnhh thương mại và vận tải việt asia gpdkkd: 032123458429 do
            sở KH & ĐT TP.HCM cấp ngày 20/03/2014
          </Text>
          <Text style={{ color: "#fff", marginBottom: 10 }}>
            Địa chỉ: 52 Vành Đai, Phường 10, Quận 6, TP. Hồ Chí Minh
          </Text>
          <Text style={{ color: "#fff", marginBottom: 10 }}>
            Email: info@sieuthitrongnha.com
          </Text>
          <Text style={{ color: "#fff", marginBottom: 10 }}>
            Zalo: 0988.188507 - 0705.549.456
          </Text>
        </View>
        {/*  */}
        <View>
          <View style={{ width: "100%", height: 200 }}>
            <Image
              source={require("../assets/images/bannerfb.jpg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>
        {/*  */}
        <View
          style={{
            backgroundColor: color.primary,
            padding: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.socialIcon}>
            <Entypo name="facebook-with-circle" size={40} color={"#4267B2"} />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={styles.socialIcon}>
            <Entypo name="twitter-with-circle" size={40} color={"#1DA1F2"} />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={styles.socialIcon}>
            <Entypo name="pinterest-with-circle" size={40} color={"#E60023"} />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={styles.socialIcon}>
            <Entypo name="youtube-with-circle" size={40} color={"#FF0000"} />
          </TouchableOpacity>
          {/*  */}
        </View>
        {/*  */}
        <View
          style={{
            backgroundColor: color.primary,
            padding: 10,
            paddingTop: 0,
            paddingLeft: 20,
          }}
        >
          <Text style={{ color: "#fff" }}>Develop by LONGFE</Text>
        </View>
        {/*  */}
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  aboutTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    paddingBottom: 15,
    marginBottom: 15,
  },
  aboutTitleText: {
    fontSize: 16,
    textTransform: "uppercase",
  },
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
    marginTop: 30,
    marginBottom: 30,
  },
  numWrapItem: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    width: "50%",
  },
  chooseText: {
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 20,
  },
  chooseItem: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  chooseItemIcon: {
    borderWidth: 2,
    borderColor: color.primary,
    marginRight: 15,
    borderRadius: 40,
    padding: 10,
  },
  chooseButton: {
    width: "60%",
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: color.primary,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  chooseButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  socialIcon: {
    backgroundColor: "#fff",
    borderRadius: 48,
    marginRight: 20,
  },
});
export default IntroScreen;
