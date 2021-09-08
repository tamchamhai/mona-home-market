import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { color, stylesSheet } from "../components/Styles";
import { LinearGradient } from "expo-linear-gradient";
import NumberFormat from "react-number-format";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import CartHeader from "../components/CartHearder";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  postDecreaseQuatity,
  postIncreaseQuatity,
  postRemoveItem,
} from "../store/actions/cartAction";
import Animated from "react-native-reanimated";

export const CartScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);

  React.useEffect(() => {
    navigation.setParams(cartList.product);
  }, []);

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
      sum += cartList.product[i].priceNum * cartList.product[i].quatity;
    }
    return sum;
  };

  const IncreaseQuatity = (num, index, unit) => {
    let increasedNum = 0;
    if (unit === "kg") {
      increasedNum = num + 0.1;
    } else {
      increasedNum = num + 1;
    }
    const res = { num: increasedNum, index: index };
    dispatch(postIncreaseQuatity(res));
  };

  const DecreaseQuatity = (num, index, unit) => {
    let decreasedNum = 0;
    if (unit === "kg") {
      decreasedNum = num + 0.1;
    } else {
      decreasedNum = num + 1;
    }
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
      <>
        <ScrollView
          style={{ flex: 1, marginBottom: 2 }}
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
                        IncreaseQuatity(item.quatity, index, item.unit);
                      }}
                    >
                      <Text>
                        <AntDesign name="caretup" size={18} color="#aaa" />
                      </Text>
                    </TouchableOpacity>
                    <NumberFormat
                      thousandsGroupStyle="thousand"
                      value={item.quatity}
                      // suffix="đ"
                      decimalSeparator="."
                      decimalScale={1}
                      displayType="text"
                      renderText={(value) => <Text>{value}</Text>}
                      type="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                    {/* <Text>{item.quatity}</Text> */}
                    <TouchableOpacity
                      onPress={() => {
                        DecreaseQuatity(item.quatity, index, item.unit);
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
        {/*  */}
        <View style={styles.wrapButtonBottom}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => {
              navigation.navigate({ name: "HomeNavigator" });
            }}
          >
            <Text style={styles.buttonBottomText}>Trở về</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => {
              navigation.navigate({ name: "DiliveryScreen" });
            }}
          >
            <Text style={styles.buttonBottomText}>Bước kế</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return <>{cartList.product.length === 0 ? CartEmpty() : Cart()}</>;
};

export const DiliveryScreen = ({ route, navigation }) => {
  const [btnActive, setBtnActive] = React.useState("left");
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  const [keyboardStatus, setKeyboardStatus] = React.useState(0);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(200);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  };

  return (
    <>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Loại giao hàng</Text>
          {/*  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={[{ marginRight: 5 }]}
              onPress={() => {
                setBtnActive("left");
              }}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={
                  btnActive === "left"
                    ? ["#00a8f3", "#00e9ce"]
                    : ["#fff", "#fff"]
                }
                style={
                  btnActive === "left"
                    ? styles.diliverButtonActive
                    : styles.diliverButtonInActive
                }
              >
                <Text
                  style={[
                    styles.diliverButtonTextOne,
                    { color: btnActive === "left" ? "#fff" : "#00a8f3" },
                  ]}
                >
                  0 đ
                </Text>
                <Text
                  style={[
                    styles.diliverButtonTextTwo,
                    { color: btnActive === "left" ? "#fff" : "#00a8f3" },
                  ]}
                >
                  Giao hàng miễn phí
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              style={[{ marginLeft: 5 }]}
              onPress={() => {
                setBtnActive("right");
              }}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={
                  btnActive === "right"
                    ? ["#00a8f3", "#00e9ce"]
                    : ["#fff", "#fff"]
                }
                style={
                  btnActive === "right"
                    ? styles.diliverButtonActive
                    : styles.diliverButtonInActive
                }
              >
                <Text
                  style={[
                    styles.diliverButtonTextOne,
                    { color: btnActive === "right" ? "#fff" : "#00a8f3" },
                  ]}
                >
                  đ
                </Text>
                <Text
                  style={[
                    styles.diliverButtonTextTwo,
                    { color: btnActive === "right" ? "#fff" : "#00a8f3" },
                  ]}
                >
                  Giao tại cửa hàng
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Thông tin giao hàng:</Text>
          <View>
            <View style={styles.diliverWrapTextInput}>
              <View style={styles.diliverLabelInput}>
                <Text style={{ fontSize: 16, lineHeight: 30, paddingTop: 5 }}>
                  Tên
                </Text>
              </View>
              <TextInput
                placeholder="Điền tên"
                clearButtonMode="always"
                style={styles.diliverTextInput}
              />
            </View>
            {/*  */}
            <View style={styles.diliverWrapTextInput}>
              <View style={styles.diliverLabelInput}>
                <Text style={{ fontSize: 16, lineHeight: 30, paddingTop: 5 }}>
                  Họ
                </Text>
              </View>
              <TextInput
                placeholder="Điền họ"
                clearButtonMode="always"
                style={styles.diliverTextInput}
              />
            </View>
            {/*  */}
            <View style={styles.diliverWrapTextInput}>
              <View style={styles.diliverLabelInput}>
                <Text style={{ fontSize: 16, lineHeight: 30, paddingTop: 5 }}>
                  Địa chỉ
                </Text>
              </View>
              <TextInput
                placeholder="Điền địa chỉ"
                clearButtonMode="always"
                style={styles.diliverTextInput}
              />
            </View>
            {/*  */}
            <View style={styles.diliverWrapTextInput}>
              <View style={styles.diliverLabelInput}>
                <Text style={{ fontSize: 16, lineHeight: 30, paddingTop: 5 }}>
                  Số điện thoại
                </Text>
              </View>
              <TextInput
                placeholder="Điền số điện thoại"
                style={styles.diliverTextInput}
                keyboardType="numeric"
                clearButtonMode="always"
              />
            </View>
          </View>
        </View>
        {/*  */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Thời gian giao hàng:</Text>
          <View style={styles.timePicker}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                {
                  label: "8:00-9:00",
                  value: "8:00-9:00",
                },
                {
                  label: "9:00-10:00",
                  value: "9:00-10:00",
                },
                {
                  label: "10:00-19:00",
                  value: "10:00-11:00",
                },
                {
                  label: "11:00-12:00",
                  value: "11:00-12:00",
                },
                {
                  label: "12:00-13:00",
                  value: "12:00-13:00",
                },
                {
                  label: "13:00-14:00",
                  value: "13:00-14:00",
                },
                {
                  label: "14:00-15:00",
                  value: "14:00-15:00",
                },
                {
                  label: "15:00-16:00",
                  value: "15:00-16:00",
                },
                {
                  label: "16:00-17:00",
                  value: "16:00-17:00",
                },
                {
                  label: "17:00-18:00",
                  value: "17:00-18:00",
                },
                {
                  label: "18:00-19:00",
                  value: "18:00-19:00",
                },
                {
                  label: "19:00-20:00",
                  value: "19:00-20:00",
                },
                {
                  label: "20:00-21:00",
                  value: "20:00-21:00",
                },
                {
                  label: "21:00-22:00",
                  value: "21:00-22:00",
                },
                {
                  label: "22:00-23:00",
                  value: "22:00-23:00",
                },
                {
                  label: "23:00-24:00",
                  value: "23:00-24:00",
                },
              ]}
            />
          </View>
        </View>
        {/*  */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Ngày giao hàng:</Text>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={styles.timePicker}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text>
                {new Intl.DateTimeFormat("vi-VN", options).format(date)}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="spinner"
                onChange={onChangeDate}
                style={{ width: "100%" }}
                textColor="#999"
              />
            )}
          </View>
        </View>
        {/*  */}
        <View style={[{ padding: 20 }, { marginBottom: keyboardStatus }]}>
          <Text style={{ fontSize: 18 }}>Ghi chú (optional)</Text>
          <TextInput
            style={{
              height: 100,
              borderWidth: 1,
              borderColor: "#aaa",
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
            }}
            placeholder="Ghi chú"
            multiline={true}
            editable={true}
            maxLength={40}
            onPress={() => {
              scrollY.current.scrollTo({ y: 500, animated: true });
            }}
          />
        </View>
      </Animated.ScrollView>
      {/*  */}
      <View style={styles.wrapButtonBottom}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate({ name: "CartScreen" });
          }}
        >
          <Text style={styles.buttonBottomText}>Trở về</Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => {
            navigation.navigate({ name: "PaymentScreen" });
          }}
        >
          <Text style={styles.buttonBottomText}>Bước kế</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const PaymentScreen = ({ route, navigation }) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
      {/*  */}
      <View style={styles.wrapButtonBottom}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate({ name: "DiliveryScreen" });
          }}
        >
          <Text style={styles.buttonBottomText}>Trở về</Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => {
            navigation.navigate({ name: "OrderScreen" });
          }}
        >
          <Text style={styles.buttonBottomText}>Bước kế</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const OrderScreen = ({ route, navigation }) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
      {/*  */}
      <View style={styles.wrapButtonBottom}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate({ name: "PaymentScreen" });
          }}
        >
          <Text style={styles.buttonBottomText}>Trở về</Text>
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => {
            // navigation.navigate({ name: "PaymentScreen" });
          }}
        >
          <Text style={styles.buttonBottomText}>Bước kế</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const CartNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={({ route, navigation }) => ({
        headerTitle: () => <CartHeader />,
        headerStyle: stylesSheet.headerStyleSheet,
      })}
    >
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerLeft: false }}
      />
      {/* <Stack.Screen
        name="DiliveryScreen"
        component={DiliveryScreen}
        options={{ headerLeft: false }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerLeft: false }}
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerLeft: false }}
      /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  diliverButtonActive: {
    width: 110,
    height: 110,
    padding: 10,
    backgroundColor: color.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  diliverButtonInActive: {
    width: 110,
    height: 110,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00a8f3",
  },
  diliverButtonTextOne: {
    fontWeight: "bold",
    fontSize: 22,
  },
  diliverButtonTextTwo: {
    fontWeight: "bold",
    marginTop: 10,
  },
  wrapButtonBottom: {
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  buttonBack: {
    backgroundColor: "#aaa",
    height: "100%",
    width: "49.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNext: {
    backgroundColor: color.primary,
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBottomText: {
    fontWeight: "bold",
    color: "#fff",
  },
  diliverWrapTextInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    marginTop: 10,
  },
  diliverLabelInput: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
  },
  diliverTextInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#aaa",
    height: "100%",
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  timePicker: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#aaa",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
});
export default CartNavigator;
