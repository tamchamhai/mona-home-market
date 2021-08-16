import MultiSlider from "@ptomasroos/react-native-multi-slider";
import * as React from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { CatagoriesTag, ProductTag } from "../components/Data";
import { color, stylesSheet } from "../components/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FilterScreen = ({ navigation }) => {
  const [activeTag, setTagActive] = React.useState({
    categorieTag: null,
    productTag: null,
  });
  const [tagName, setTagName] = React.useState({
    categoriesTagName: "",
    productTagName: "",
    priceTag: 0,
  });
  const [scrollEnabled, setScrollEnabled] = React.useState(true);

  const enableScroll = () => {
    setScrollEnabled(true);
  };
  const disableScroll = () => {
    setScrollEnabled(false);
  };

  const renderLabel = (value) => {
    return (
      <View
        style={{
          position: "absolute",
          left:
            value.oneMarkerLeftPosition <= 330
              ? value.oneMarkerLeftPosition === 0
                ? value.oneMarkerLeftPosition - 15
                : value.oneMarkerLeftPosition - 35
              : value.oneMarkerLeftPosition - 50,
          bottom: 45,
          backgroundColor: color.primary,
          padding: 5,
          borderRadius: 15,
          zIndex: 1,
        }}
      >
        <Text style={{ color: color.secondary }}>{value.oneMarkerValue} đ</Text>
      </View>
    );
  };

  const renderMarker = (value) => {
    return (
      <>
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: color.primary,
            borderRadius: 30,
          }}
        ></View>
      </>
    );
  };

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
            paddingTop: 20,
          },
        ]}
      >
        <View style={{ width: "30%" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Text>
              <FontAwesome
                name="angle-left"
                size={22}
                color={color.secondary}
              />{" "}
              <Text style={{ color: color.secondary, fontSize: 16 }}>
                Trở về
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={{ width: "30%" }}>
          <Text
            style={{
              color: color.secondary,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Bộ lọc
          </Text>
        </View>
        {/*  */}
        <View style={{ width: "30%" }}></View>
      </View>
      {/*  */}
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginBottom: 55,
        }}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 26, marginBottom: 15 }}>Bộ lọc</Text>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Danh mục sản phẩm
          </Text>
          <View style={styles.tags}>
            {CatagoriesTag.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={
                    activeTag.categoriesTag === index
                      ? styles.tagActive
                      : styles.tagInActive
                  }
                  onPress={() => {
                    setTagActive({ ...activeTag, categoriesTag: index });
                    setTagName({ ...tagName, categoriesTagName: item });
                  }}
                >
                  <Text style={{ color: color.primary }}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/*  */}
        <View style={{ padding: 20, paddingTop: 0 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Thẻ sản phẩm</Text>
          <View style={styles.tags}>
            {ProductTag.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={
                    activeTag.productTag === index
                      ? styles.tagActive
                      : styles.tagInActive
                  }
                  onPress={() => {
                    setTagActive({ ...activeTag, productTag: index });
                    setTagName({ ...tagName, productTagName: item });
                  }}
                >
                  <Text style={{ color: color.primary }}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/*  */}
        <View style={{ padding: 20 }}>
          <Text style={{ color: color.primary, fontSize: 18 }}>Giá</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              height: 160,
              paddingLeft: (Dimensions.get("window").width - 390) / 2,
            }}
          >
            <MultiSlider
              onValuesChangeStart={disableScroll}
              onValuesChangeFinish={enableScroll}
              sliderLength={350}
              enableLabel={true}
              min={0}
              max={1000001}
              step={1000}
              customLabel={renderLabel}
              customMarker={renderMarker}
              selectedStyle
              onValuesChangeFinish={(value) => {
                setTagName({ ...tagName, priceTag: value });
                enableScroll();
              }}
              // values={[100]}
            />
          </View>
        </View>
        {/*  */}
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: color.primary,
              height: 50,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
          >
            <Text style={{ color: color.secondary, fontSize: 18 }}>Lọc</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setTagName({
                ...tagName,
                categoriesTagName: "",
                productTagName: "",
                priceTag: null,
              });
              setTagActive({
                ...activeTag,
                categoriesTag: null,
                productTag: null,
              });
            }}
          >
            <Text
              style={{
                color: color.primary,
                fontSize: 18,
                textAlign: "center",
                margin: 20,
              }}
            >
              Xóa bộ lọc
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 16 },
  tagActive: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.primary,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagInActive: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#ddd",
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tags: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  categoriesTags: {
    marginRight: 5,
    borderWidth: 1,
    borderColor: color.primary,
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#ddd",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
export default FilterScreen;
