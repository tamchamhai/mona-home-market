import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  Pressable,
  Modal,
} from "react-native";
import { useSelector } from "react-redux";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CatagoriesScreen = ({ route, navigation }) => {
  const { category } = useSelector((state) => state.categories);
  const [visibleModal, setVisibleModal] = React.useState(false);
  const scrollRef = React.useRef(null);
  return (
    <>
      <View style={{}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visibleModal}
          onRequestClose={() => {
            setVisibleModal(!visibleModal);
          }}
        >
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => {
                setVisibleModal(!visibleModal);
              }}
            >
              <Text style={styles.modalText}>Sắp xếp từ A đến Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisibleModal(!visibleModal);
              }}
            >
              <Text style={styles.modalText}>Sắp xếp từ Z đến A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisibleModal(!visibleModal);
              }}
            >
              <Text style={styles.modalText}>Sắp xếp giá giảm dần</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisibleModal(!visibleModal);
              }}
            >
              <Text style={styles.modalText}>Sắp xếp giá tăng dần</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {/*  */}
      </View>
      {/*  */}
      <View
        style={[
          stylesSheet.headerStyleSheet,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            paddingTop: 30,
          },
        ]}
      >
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(route.params.screen);
            }}
          >
            <Text style={{ color: "#fff" }}>
              <FontAwesome name="angle-left" size={20} color="#fff" /> Trở lại
            </Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={{ width: "50%" }}>
          <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
            {route.params.item.title}
          </Text>
        </View>
        {/*  */}
        <View style={{ width: "20%", justifyContent: "flex-end" }}>
          <Pressable
            onPress={() => {
              setVisibleModal(!visibleModal);
            }}
          >
            <Text style={{ textAlign: "right" }}>
              <MaterialCommunityIcons
                name="sort-variant"
                size={20}
                color="#fff"
              />
            </Text>
          </Pressable>
        </View>
      </View>
      {/*  */}
      <View style={{ width: "100%", height: 130 }}>
        <FlatList
          horizontal
          data={category}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item);
                navigation.navigate({
                  name: "CatagoriesScreen",
                  params: { screen: "HomeNavigator", item: item },
                });
              }}
              style={{
                height: 120,
                width: 120,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ccc",
                margin: 5,
                marginLeft: 0,
                padding: 5,
                borderRadius: 10,
              }}
            >
              <Image
                source={item.imageCommodities}
                style={{ width: 60, height: "60%", marginBottom: 10 }}
              />
              <Text style={{ color: "#000", height: "40%" }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/*  */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        style={{ marginBottom: 55 }}
      >
        <View style={styles.itemWrap}>
          {route.params.item.goods.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => {
                navigation.navigate({
                  name: "DetailScreen",
                  params: { screen: "HomeNavigator", item: item },
                });
                scrollRef.current.scrollTo({ y: 0, animated: true });
              }}
            >
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.itemImage}
              />
              <Text
                style={styles.itemName}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              >
                {item.name}
              </Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemUnit}>{item.unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  itemWrap: {
    flex: 2,
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderWidth: 3,
    borderColor: "#fff",
    height: 300,
  },
  itemImage: {
    flex: 1,
    justifyContent: "center",
    height: 200,
    width: "100%",
  },
  itemUnit: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#ffca18",
  },
  itemPrice: {
    color: color.primary,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemName: { paddingLeft: 10, paddingRight: 10, height: 40 },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
    top: 300,
    right: "25%",
    // transform: [{ translateX: "90%" }],
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 20,
  },
  modalText: {
    color: color.primary,
    fontSize: 18,
    marginBottom: 10,
  },
});
export default CatagoriesScreen;
