import * as React from "react";
import { Image, StyleSheet } from "react-native";

export const DataCarousel = [
  require("../assets/images/carousel-one.jpg"),
  require("../assets/images/carousel-two.jpg"),
  require("../assets/images/carousel-three.jpg"),
  require("../assets/images/carousel-four.jpg"),
];
export const DataSlideBar = [
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#df99b1" },
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#8ce29b" },
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#70abe3" },
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#c676ff" },
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#ff5d95" },
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#8ce29b" },
  { title: "Hàng tiêu dùng", iconName: "fruit-cherries", color: "#df99b1" },
];
export const DataCommodities = [
  {
    title: "Bữa ăn gia đình",
    imageCommodities: require("../assets/images/meal.png"),
    goods: [
      {
        unit: "kg",
        name: "Tôm",
        price: "230,000đ",
        image: require("../assets/images/meal.png"),
      },
      {
        unit: "kg",
        name: "Sườn non heo tươi C.P khay 300g",
        price: "130,000đ",
        image: require("../assets/images/meal.png"),
      },
      {
        unit: "kg",
        name: "Thịt heo xay G khay 300g",
        price: "330,000đ",
        image: require("../assets/images/meal.png"),
      },
      {
        unit: "kg",
        name: "Kiwi vàng Zespri hộp 500g",
        price: "280,000đ",
        image: require("../assets/images/meal.png"),
      },
      {
        unit: "kg",
        name: "Chả lụa quết thượng hạng Cầu Tre gói 500g",
        price: "240,000đ",
        image: require("../assets/images/meal.png"),
      },
      {
        unit: "kg",
        name: "Thùng 48 bịch sữa tươi tiệt trùng ít đường TH true MILK 220ml",
        price: "130,000đ",
        image: require("../assets/images/meal.png"),
      },
    ],
  },
  {
    title: "Gạo ngon Việt Nam",
    imageCommodities: require("../assets/images/ricebag.png"),
    goods: [
      {
        unit: "kg",
        name: " Head & Shoulders bạc hà mát rượi 625ml",
        Thùng: "24 gói mì hải sản SiuKay 128g",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
      {
        unit: "kg",
        name: "Thịt càng ghẹ đông lạnh Mama Food khay 150g",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
      {
        unit: "kg",
        name: "Dầu gội sạch gàu Head & Shoulders bạc hà mát rượi 625ml",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
      {
        unit: "kg",
        name: "Rau sắc màu hỗn hợp Đôi Đũa Vàng gói 400g",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
      {
        unit: "kg",
        name: "Gạo Vinh Hiển Thông Dụng túi 5kg",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
      {
        unit: "kg",
        name: "Dầu gội chống gàu Selsun 50ml",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
      {
        unit: "kg",
        name: "Gọa thơm thượng hạng ST25",
        price: "18,000đ",
        image: require("../assets/images/ricebag.png"),
      },
    ],
  },
  {
    title: "Dầu ăn - gia vị",
    imageCommodities: require("../assets/images/cookingoil.jpg"),
    goods: [
      {
        unit: "chai",
        name: "Dầu ăn cao cấp Meizan",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
      {
        unit: "chai",
        name: "Dầu thực vật tinh luyện Cái Lân can 5 lít",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
      {
        unit: "chai",
        name: "Dầu đậu nành tinh luyện Janbee can 5 lít",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
      {
        unit: "chai",
        name: "Dầu Olive Pomace Palermo chai 1 lít",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
      {
        unit: "chai",
        name: "Dầu mè thơm nguyên chất Nakydaco chai 150ml",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
      {
        unit: "chai",
        name: "Dầu olive Extra Virgin kid Casa di Oliva chai 250ml",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
      {
        unit: "chai",
        name: "Dầu olive hạt cải Kankoo chai 2 lít",
        price: "38,000đ",
        image: require("../assets/images/cookingoil.jpg"),
      },
    ],
  },
  {
    title: "Trái cây Việt Nam",
    imageCommodities: require("../assets/images/fruit.png"),
    goods: [
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        image: require("../assets/images/fruit.png"),
      },
    ],
  },
  {
    title: "Chè - bánh",
    imageCommodities: require("../assets/images/cookie.png"),
    goods: [
      {
        unit: "túi",
        name: "Bánh combo Pie Bánh combo Bánh combo Bánh combo Bánh combo ",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/cookie.png"),
      },
    ],
  },
  {
    title: "Hóa mỹ phẩm",
    imageCommodities: require("../assets/images/botgiat.png"),
    goods: [
      {
        unit: "túi",
        name: "Nước xả vãi 107 hương Charming Violet",
        price: "108,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bột giặt 107-5kg",
        price: "138,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        image: require("../assets/images/botgiat.png"),
      },
    ],
  },
];

export const HeaderLogo = () => (
  <Image
    style={styles.logoHeader}
    source={require("../assets/images/logo.png")}
  />
);

export const DataTag = [
  "Fish",
  "Tomato",
  "Cookies",
  "Rice bag",
  "Noodles",
  "Basa Fish",
  "Rolls Royces",
  "Lamboghini",
  "McLarent",
  "Ferrari",
  "Mercedes-Benz",
];

const styles = StyleSheet.create({
  logoHeader: {
    height: 40,
    width: 40,
    resizeMode: "cover",
  },
});
