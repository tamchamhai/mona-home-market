import React from "react";
import { StyleSheet, Text, View } from "react-native";

const IntroScreen = () => {
  return (
    <View>
      <Text>Intro Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  text: {
    color: "black",
  },
});
export default IntroScreen;
