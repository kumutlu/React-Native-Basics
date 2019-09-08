import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ComponentsScreen = () => {
  const name = "Kemal";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
