import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>React Native Moduls</Text>
      <Button
        type="outline"
        onPress={() => navigate("Components")}
        title="Go to Component Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("List")}
        title="Go to List Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("Square")}
        title="Go to Square Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("Text")}
        title="Go to Text Demo"
      />
      <Button
        type="outline"
        onPress={() => navigate("Box")}
        title="Go to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
});

export default HomeScreen;
