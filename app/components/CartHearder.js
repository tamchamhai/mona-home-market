import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { color } from "./Styles";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const cartList = useSelector((state) => state.cart);
  return (
    <>
      {cartList.product.length === 0 ? (
        <View>
          <Text style={{ color: color.secondary, fontSize: 18 }}>Giỏ Hàng</Text>
        </View>
      ) : (
        <View>
          <Text style={{ color: color.secondary, fontSize: 18 }}>
            giỏ hàng không trống nha
          </Text>
        </View>
      )}
    </>
  );
};

export default CartHeader;
