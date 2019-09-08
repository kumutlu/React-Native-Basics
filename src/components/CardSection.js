import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    padding: 5,
    backgroudColor: "#fff",
    borderColor: "#ddd",
    flexDirection: "row",
    position: "relative"
  }
};

export default CardSection;
