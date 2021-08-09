import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ContactScreen = (props) => {
  return (
    <View>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
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
export default ContactScreen;
