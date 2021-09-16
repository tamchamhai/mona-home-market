import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
  Animated,
} from "react-native";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ButtonDrawerPhone } from "../components/Button";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

const DetailScreen = ({ route, navigation }) => {
  const { releaseProduct } = useSelector((state) => state.cart);
  const { item } = route.params;
  const [isInfoOrComment, setIsInfoOrComment] = React.useState(true);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {}, []);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const inputRange = [-1, 0, 350];
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 0.5],
  });
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 0],
  });

  return (
    <>
      <View
        style={[
          stylesSheet.headerStyleSheet,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(route.params.screen);
            scrollRef.current.scrollTo({ y: 0, animated: true });
          }}
          style={{ width: "30%" }}
        >
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            <FontAwesome name="angle-left" size={20} color={color.secondary} />
            <Text style={{ color: color.secondary }}> Quay về</Text>
          </Text>
        </TouchableOpacity>
        {/*  */}
        <View
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            paddingTop: 15,
          }}
        >
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 50, height: 50, resizeMode: "cover" }}
          />
        </View>
        {/*  */}
        <View style={{ width: "30%", paddingTop: 10, alignItems: "flex-end" }}>
          {<ButtonDrawerPhone />}
        </View>
      </View>
      {/*   */}
      <Animated.ScrollView
        ref={scrollRef}
        style={{ marginBottom: 2 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
          { listener: (event) => console.log(event) }
        )}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={{
            height: 350,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            transform: [{ scale }],
            opacity: opacity,
          }}
        >
          {console.log(scrollY)}
          <Image
            source={item.image}
            style={{
              height: "100%",
              resizeMode: "cover",
              width: 300,
            }}
          />
        </Animated.View>
        {/*  */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              marginBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Đơn vị tính: {item.unit}
          </Text>
          <Text
            style={{ fontSize: 18, color: color.primary, marginBottom: 10 }}
          >
            <NumberFormat
              thousandsGroupStyle="thousand"
              value={item.price}
              suffix="đ"
              decimalSeparator="."
              decimalScale={1}
              displayType="text"
              renderText={(value) => <Text>{value}</Text>}
              type="text"
              thousandSeparator={true}
              allowNegative={true}
            />
          </Text>
          <Text>({item.comments.length}) Đánh giá</Text>
        </View>
        {/*  */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              marginTop: 20,
            }}
          >
            <View
              style={[
                {
                  width: "50%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                },
                isInfoOrComment
                  ? { borderBottomWidth: 2, borderColor: color.primary }
                  : {},
              ]}
            >
              <Text
                onPress={() => {
                  setIsInfoOrComment(!isInfoOrComment);
                }}
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  height: "100%",
                  width: "100%",
                  lineHeight: 50,
                }}
              >
                Thông tin
              </Text>
            </View>
            <View
              style={[
                {
                  width: "50%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                },
                !isInfoOrComment
                  ? { borderBottomWidth: 2, borderColor: color.primary }
                  : {},
              ]}
              onPress={() => {
                setIsInfoOrComment(!isInfoOrComment);
              }}
            >
              <Text
                onPress={() => {
                  setIsInfoOrComment(!isInfoOrComment);
                }}
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  height: "100%",
                  width: "100%",
                  lineHeight: 50,
                }}
              >
                Đánh giá
              </Text>
            </View>
          </View>
          {/*  */}
          <ScrollView
            style={{ height: 300, padding: 20 }}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}
          >
            {!isInfoOrComment
              ? item.comments.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginBottom: 20,
                    }}
                  >
                    <View style={{ width: "20%" }}>
                      <Image
                        source={item.avatar}
                        style={{ height: 50, width: 50 }}
                      />
                    </View>
                    <View style={{ width: "80%" }}>
                      <Text
                        style={{
                          fontSize: 18,
                          marginBottom: 5,
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text>{item.comment}</Text>
                    </View>
                  </View>
                ))
              : item.info.map((item, index) => (
                  <View style={{ marginBottom: 10 }} key={index}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.title}
                    </Text>
                    <Text>{item.content}</Text>
                  </View>
                ))}
          </ScrollView>
        </View>
        {/* release product */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              marginTop: 20,
            }}
          >
            <View
              style={[
                {
                  width: "50%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                },
                { borderBottomWidth: 2, borderColor: color.primary },
              ]}
            >
              <Text
                onPress={() => {
                  setIsInfoOrComment(!isInfoOrComment);
                }}
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  height: "100%",
                  width: "100%",
                  lineHeight: 50,
                }}
              >
                Có thể bạn quan tâm
              </Text>
            </View>
            <View
              style={[
                {
                  width: "50%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => {
                setIsInfoOrComment(!isInfoOrComment);
              }}
            >
              <Text
                onPress={() => {
                  setIsInfoOrComment(!isInfoOrComment);
                }}
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  height: "100%",
                  width: "100%",
                  lineHeight: 50,
                }}
              ></Text>
            </View>
          </View>
          {/*  */}
          <ScrollView>
            <FlatList
              data={releaseProduct}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginLeft: 10, marginRight: 10 }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    navigation.navigate({
                      name: "DetailScreen",
                      params: { screen: "CartScreen", item: item },
                    });
                    scrollRef.current.scrollTo({ y: 0, animated: true });
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 130, height: 150 }}
                  />
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ padding: 10 }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ color: color.primary }}>{item.price}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
      </Animated.ScrollView>
      {/*  */}
      <View
        style={{
          height: 50,
          width: "100%",
          marginBottom: 52,
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", width: "50%" }}>
          <TouchableOpacity
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ddd",
              borderRightWidth: 2,
              borderColor: color.secondary,
            }}
          >
            <Feather name="share-2" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ddd",
              borderRightWidth: 2,
              borderColor: color.secondary,
            }}
          >
            <AntDesign name="shoppingcart" size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.primary,
          }}
        >
          <Text style={{ color: color.secondary }}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailScreen;
