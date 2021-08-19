import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { color, stylesSheet } from "../components/Styles";
import { LinearGradient } from "expo-linear-gradient";
import NumberFormat from "react-number-format";
import CartHeader from "../components/CartHearder";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  postDecreaseQuatity,
  postIncreaseQuatity,
  postRemoveItem,
} from "../store/actions/cartAction";

const CartScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);

  React.useEffect(() => {
    navigation.setParams(cartList.product);
  }, []);
  // console.log(route);
  // console.log(navigation);

  const CartEmpty = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ marginBottom: 20 }}>
            <Ionicons name="cart-outline" size={140} color="#aaa" />
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 30 }}>
            Chưa có gì trong giỏ hàng!
          </Text>
          <Text>Thêm sản phẩm vào giỏ hàng bằng nút mua hàng bên dưới</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: color.primary,
              width: 200,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("HomeNavigator");
            }}
          >
            <Text style={{ color: color.secondary, fontSize: 18 }}>
              Mua Hàng
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const SumPrice = () => {
    let sum = 0;
    for (let i = 0; i < cartList.product.length; i++) {
      sum += cartList.product[i].price * cartList.product[i].quatity;
    }

    return sum;
  };

  const IncreaseQuatity = (num, index) => {
    let increasedNum = num + 0.1;
    const res = { num: increasedNum, index: index };
    dispatch(postIncreaseQuatity(res));
  };

  const DecreaseQuatity = (num, index) => {
    let decreasedNum = num - 0.1;
    const res = { num: decreasedNum, index: index };
    dispatch(postDecreaseQuatity(res));
  };

  const RemoveItem = (index) => {
    let tempProduct = [...cartList.product];
    tempProduct.splice(index, 1);
    dispatch(postRemoveItem(tempProduct));
  };

  const Cart = () => {
    return (
      <ScrollView
        style={{ flex: 1, marginBottom: 55 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#aaa",
          }}
        >
          <Text style={{ fontSize: 18 }}>Tổng giá:</Text>
          <Text style={{ fontSize: 18, color: color.primary }}>
            {
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={SumPrice()}
                suffix="đ"
                decimalSeparator="."
                displayType="text"
                renderText={(value) => <Text>{value}</Text>}
                type="text"
                thousandSeparator={true}
                allowNegative={true}
              />
            }
          </Text>
        </View>
        {/*  */}
        <View>
          {cartList.product.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 150,
                  borderBottomWidth: 1,
                  borderColor: "#aaa",
                }}
              >
                <TouchableOpacity
                  style={{ width: "30%" }}
                  onPress={() => {
                    navigation.navigate({
                      name: "DetailScreen",
                      params: { screen: "CartScreen", item: item },
                    });
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </TouchableOpacity>
                {/*  */}
                <View style={{ width: "40%" }}>
                  <Text style={{ fontSize: 18, marginBottom: 10 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 20 }}>
                    <NumberFormat
                      thousandsGroupStyle="thousand"
                      value={item.price}
                      suffix="đ"
                      decimalSeparator="."
                      displayType="text"
                      renderText={(value) => <Text>{value}</Text>}
                      type="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />{" "}
                    /
                    <Text style={{ fontSize: 14, marginBottom: 10 }}>
                      {item.unit}
                    </Text>
                  </Text>
                </View>
                {/*  */}
                <TouchableOpacity
                  style={{
                    width: "10%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    RemoveItem(index);
                  }}
                >
                  <Text>
                    <FontAwesome name="trash-o" size={18} />
                  </Text>
                </TouchableOpacity>
                {/*  */}
                <View
                  style={{
                    width: "10%",
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#aaa",
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      IncreaseQuatity(item.quatity, index);
                    }}
                  >
                    <Text>
                      <AntDesign name="caretup" size={18} color="#aaa" />
                    </Text>
                  </TouchableOpacity>
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={SumPrice()}
                    suffix="đ"
                    decimalSeparator="."
                    decimalScale={1}
                    displayType="text"
                    renderText={(value) => <Text>{item.quatity}</Text>}
                    type="text"
                    thousandSeparator={true}
                    allowNegative={true}
                  />
                  {/* <Text>{item.quatity}</Text> */}
                  <TouchableOpacity
                    onPress={() => {
                      DecreaseQuatity(item.quatity, index);
                    }}
                  >
                    <Text>
                      <AntDesign name="caretdown" size={18} color="#aaa" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        {/*  */}
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18, paddingTop: 30, paddingBottom: 10 }}>
            Mã khuyến mãi:
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              placeholder="Nhập mã khuyến mãi"
              style={{
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "#aaa",
                width: "70%",
                height: 40,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            />
            <TouchableOpacity
              style={{
                width: "25%",
              }}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={["#00e910", "#00e9a3", "#00e9ce"]}
                style={{
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: color.secondary }}>Xác Nhận</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  return <>{cartList.product.length === 0 ? CartEmpty() : Cart()}</>;
};

const CartNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitle: () => <CartHeader />,
        headerStyle: stylesSheet.headerStyleSheet,
      })}
    >
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default CartNavigator;
