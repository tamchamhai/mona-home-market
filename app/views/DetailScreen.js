import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ButtonDrawerPhone } from "../components/Button";
import NumberFormat from "react-number-format";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  React.useEffect(() => {
    console.log(route.params);
  }, []);
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
      <ScrollView>
        <View
          style={{
            height: 350,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: "100%",
              resizeMode: "cover",
              width: 300,
            }}
          />
        </View>
        {/*  */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 23, marginBottom: 10 }}>{item.name}</Text>
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
          <Text>(0) Đánh giá</Text>
        </View>
        {/*  */}
        <View>
          <View></View>
          <View></View>
        </View>
      </ScrollView>
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
