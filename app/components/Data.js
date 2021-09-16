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
        name: "Shrimp",
        price: "230,000đ",
        priceNum: 230000,
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Tôm",
        price: "230,000đ",
        priceNum: 230000,
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Sườn non heo tươi C.P khay 300g",
        price: "130,000đ",
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Thịt heo xay G khay 300g",
        price: "330,000đ",
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Kiwi vàng Zespri hộp 500g",
        price: "280,000đ",
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Chả lụa quết thượng hạng Cầu Tre gói 500g",
        price: "240,000đ",
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Thùng 48 bịch sữa tươi tiệt trùng ít đường TH true MILK 220ml",
        price: "130,000đ",
        image: require("../assets/images/meal.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
    ],
  },
  {
    title: "Gạo ngon Việt Nam",
    imageCommodities: require("../assets/images/ricebag.png"),
    goods: [
      {
        unit: "kg",
        quatity: 1,
        name: " Head & Shoulders bạc hà mát rượi 625ml",
        Thùng: "24 gói mì hải sản SiuKay 128g",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        quatity: 1,
        name: "Thịt càng ghẹ đông lạnh Mama Food khay 150g",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        quatity: 1,
        name: "Dầu gội sạch gàu Head & Shoulders bạc hà mát rượi 625ml",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        quatity: 1,
        name: "Rau sắc màu hỗn hợp Đôi Đũa Vàng gói 400g",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        quatity: 1,
        name: "Gạo Vinh Hiển Thông Dụng túi 5kg",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        quatity: 1,
        name: "Dầu gội chống gàu Selsun 50ml",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        quatity: 1,
        name: "Gọa thơm thượng hạng ST25",
        price: "18,000đ",
        priceNum: 18000,
        image: require("../assets/images/ricebag.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
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
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "chai",
        name: "Dầu thực vật tinh luyện Cái Lân can 5 lít",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "chai",
        name: "Dầu đậu nành tinh luyện Janbee can 5 lít",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "chai",
        name: "Dầu Olive Pomace Palermo chai 1 lít",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "chai",
        name: "Dầu mè thơm nguyên chất Nakydaco chai 150ml",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "chai",
        name: "Dầu olive Extra Virgin kid Casa di Oliva chai 250ml",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "chai",
        name: "Dầu olive hạt cải Kankoo chai 2 lít",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookingoil.jpg"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
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
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "kg",
        name: "Vãi thiều Bắc Giang",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/fruit.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
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
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/cookie.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
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
        priceNum: 108000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bột giặt 107-5kg",
        price: "138,000đ",
        priceNum: 108000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
      },
      {
        unit: "túi",
        name: "Bánh combo Pie",
        price: "38,000đ",
        priceNum: 38000,
        image: require("../assets/images/botgiat.png"),
        comments: [
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
          {
            name: "John",
            avatar: require("../assets/images/avataaars.png"),
            comment: "Hàng ngon bổ rẻ nha!",
          },
        ],
        info: [
          {
            title: "Giới thiệu sản phẩm: ",
            content:
              "Hạt gạo thon dài 7-8mm, hạt trong, rất ít bạc bụng, cơm trắng mềm, thơm nhẹ. Giống lúa OM18 được chợn từ tổ hợp lại OM 5188, đây là giống lúa thơm có ưu diểm nổi trội như chống chịu mặn cao ở ngưỡng 3-4%, kháng sâu bệnh nhất là kháng cao và ởn định đổi với bệnh đạo ôn, năng suất cao và thời gian sinh trường ngắn.",
          },
          {
            title: "Hướng dẫn sử dụng: ",
            content:
              "- Đong gạo vào nồi và vo gạo với nước. Nấu cơm theo tỷ lệ 1 chén gạo khoảng 1-2 chén nước. Nấu cơm khoảng 30 phút để hạt gạo được chín kỹ và thơm mềm hơn",
          },
          {
            title: "Hướng dẫn bảo quản: ",
            content:
              "Để nơi khô ráo, thoáng mát để tránh mối mọt gạo phát trển. Bảo quản gọa trong thùng/túi đậy kín",
          },
        ],
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

export const ProductTag = [
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
  "Chanh dây",
  "Chanh không hạt",
  "Hóa mỹ phẩm",
  "Nước giặt xả",
  "Dầu đậu nành Tương an",
  "Bắp cải",
  "Trái cây",
  "Ớt đà lạt",
  "Gạo GMT18",
  "Gạo thường hạng",
  "Bột giặt OMO",
  "Gân heo",
  "Gân bò",
  "Khoai lang",
  "Rau củ quả",
  "Dầu ăn cookingoil",
  "Gạo ST25",
  "Bí đao",
  "Mướp hương",
  "Chân heo",
  "Móng heo",
  "Chanh giấy",
  "Gà nguyên con",
  "Má heo",
  "Lòng heo",
  "Gạo tài nguyên chợ đào",
  "Gạo xốp nở",
  "Củ dền",
  "Sườn heo",
  "Thịt heo xay",
  "Ớt hiểm",
  "Gạo lài sữa",
  "Cải bẹ xanh",
  "Rau muống dài",
  "Nước mắm",
  "Nước mắm việt xanh",
  "Bột nêm",
  "Bột ngọt",
  "Salad",
  "Rau xanh",
  "Bí đỏ",
  "Cải thìa",
  "Cải thảo",
  "Xương heo",
];

export const CatagoriesTag = [
  "Sản phẩm đang khuyến mãi",
  "Hóa mỹ phẩm",
  "Tôm -cua",
  "Vệ sinh cá nhân",
  "Chè - bánh",
  "Tẩy rửa",
  "Trái cây việt nam",
  "Nước tương",
  "Nước lau sàn/lau kính",
  "Thủy hải sản",
  "Gia vị",
  "Gà",
  "Heo",
  "Bò",
  "Củ - quả",
  "Đậu",
  "Bánh truyền thống",
  "Gạo ngon việt nam",
  "Xả vãi",
  "Bánh hiện đại",
  "Cá nước ngọt",
  "Nước giải khát",
  "Rau - bông - lá",
  "Gạo",
  "Dầu ăn",
];

const styles = StyleSheet.create({
  logoHeader: {
    height: 40,
    width: 40,
    resizeMode: "cover",
  },
});

export const FB_APP_ID = "250858150377927";
