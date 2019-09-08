import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(password.length);
  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My Name is {name}</Text>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="Enter Your Password"
        value={password}
        onChangeText={newValue2 => setPassword(newValue2)}
      />
      {password.length < 5 ? (
        <Text>Please Enter Longer Than 5 Characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 30
  }
});

export default TextScreen;
