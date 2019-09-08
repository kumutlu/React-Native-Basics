import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child No1</Text>
      <Text style={styles.textStyle}>Child No2</Text>
      <Text style={styles.textStyle}>Child No3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // alignItems: "flex-start",
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between"
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red"
  }
});

export default BoxScreen;
