import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  SectionList,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "../components/Styles";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const CustomDrawerContent = (props) => {
  const [selectIndex, setSeletIndex] = React.useState(null);
  const DATA = [
    {
      title: "Bữa ăn gia đình",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 0,
    },
    {
      title: "Gạo ngon việt nam",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 1,
    },
    {
      title: "Dầu ăn - gia vị",
      data: [
        "Xem tất cả",
        "Nước mắm",
        "Dầu ăn",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 2,
    },
    {
      title: "Trái cây việt nam",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 3,
    },
    {
      title: "Chè - bánh",
      data: [
        "Xem tất cả",
        "Bánh hiện đại",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 4,
    },
    {
      title: "Thực phẩm chay",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 5,
    },
    {
      title: "Hóa mỹ phẩm",
      data: [
        "Xem tât cả",
        "Vệ sinh cá nhân",
        "Nước rửa chén",
        "Xả vãi",
        "Bột giặt - Nước giặt",
      ],
      index: 6,
    },
    {
      title: "Combo",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 7,
    },
    {
      title: "Dịch vụ",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 8,
    },
    {
      title: "Sản phẩm khuyến mãi",
      data: [
        "Xem tất cả",
        "Thực phẩm khác",
        "Gạo - nếp - đậu",
        "Rau - củ - quả",
      ],
      index: 9,
    },
  ];
  const ref = React.useRef();

  return (
    <Transitioning.View transition={transition} ref={ref} style={{ flex: 1 }}>
      <View style={{ height: "90%" }}>
        <DrawerContentScrollView
          {...props}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: color.primary,
              }}
            >
              Mục Lục
            </Text>
          </View>
          {/*  */}
          <View>
            <TouchableOpacity
              style={styles.contactUsContainer}
              onPress={() => {
                props.navigation.navigate("IntroScreen");
                props.navigation.closeDrawer();
              }}
            >
              <Text style={{ color: color.primary }}>GIỚI THIỆU</Text>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              style={styles.contactUsContainer}
              onPress={() => {
                props.navigation.navigate("ContactScreen");
                props.navigation.closeDrawer();
              }}
            >
              <Text style={{ color: color.primary }}>LIÊN HỆ</Text>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View>
            {DATA.map((item, index) => {
              return (
                <View key={index} style={{ flexGrow: 1 }}>
                  <TouchableOpacity
                    onPress={() => {
                      ref.current.animateNextTransition();
                      setSeletIndex(index === selectIndex ? null : index);
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          textTransform: "uppercase",
                          paddingLeft: 15,
                          marginTop: 10,
                          color: color.primary,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/*  */}
                  {index === selectIndex && (
                    <View style={{ flexGrow: 1 }}>
                      {item.data.map((item, index) => (
                        <TouchableOpacity key={index}>
                          <Text style={{ marginTop: 5, marginLeft: 25 }}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </DrawerContentScrollView>
      </View>

      <TouchableOpacity style={styles.logoutContainer} onPress={() => {}}>
        <Text style={styles.logoutText}>SIGN OUT</Text>
      </TouchableOpacity>
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    padding: 5,
  },
  image: {
    resizeMode: "contain",
    width: "80%",
    height: "100%",
  },
  contactUsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 25,
    alignItems: "center",
    paddingLeft: 15,
  },
  logoutContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 55,
  },
  drawerText: {
    marginLeft: 16,
  },
  logoutText: {
    color: "#b23b3b",
  },
  title: {
    fontSize: 13,
    marginBottom: 3,
  },
  item: { paddingLeft: 20 },
  header: {
    fontSize: 14,
    textTransform: "uppercase",
    paddingLeft: 15,
    paddingTop: 5,
  },
  wrapHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
  },
});

export default CustomDrawerContent;
