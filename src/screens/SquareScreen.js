import React, { useReducer } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ColorCounter from "../components/ColorCounter";
import { Button } from "react-native-elements";
// import Card from "../components/Card";
// import CardSection from "../components/CardSection";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case "reset_black":
      return { ...state, blue: 0, red: 0, green: 0 };
    case "reset_white":
      return { ...state, blue: 255, red: 255, green: 255 };
    default:
      return state;
  }
};

const SquareScreen = props => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state);
  const { red, green, blue } = state;

  return (
    <ScrollView style={{ flex: 1 }}>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      {/* <View
        style={{
          height: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      /> */}

      <View
        style={{
          borderColor: `rgb(${red}, ${green}, ${blue})`,
          borderWidth: 60,
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignSelf: "center",
          height: 250
        }}
      >
        <Text
          style={{
            borderWidth: 10,
            borderColor: `rgb(${red}, 0, 0)`,
            alignSelf: "center",
            color: `rgb(${red}, 0, 0)`,
            fontSize: 16,
            padding: 5,
            margin: 3,
            justifyContent: "space-between"
          }}
        >
          R: {state.red}
        </Text>
        <Text
          style={{
            borderWidth: 10,
            borderColor: `rgb(0, ${green}, 0)`,
            alignSelf: "center",
            color: `rgb(0, ${green}, 0)`,
            fontSize: 16,
            padding: 5,
            margin: 3
          }}
        >
          G: {state.green}
        </Text>
        <Text
          style={{
            borderWidth: 10,
            borderColor: `rgb(0, 0, ${blue})`,
            alignSelf: "center",
            color: `rgb(0, 0, ${blue})`,
            fontSize: 16,
            padding: 5,
            margin: 3
          }}
        >
          B: {state.blue}
        </Text>
      </View>
      <Button
        style={{
          borderWidth: 5,
          borderColor: "black",
          color: "white",
          marginLeft: 5,
          marginRight: 5
        }}
        title="Reset Black"
        onPress={() =>
          dispatch({
            type: "reset_black",
            payload: (state.blue, state.green, state.red)
          })
        }
      ></Button>
      <Button
        style={{
          borderWidth: 5,
          borderColor: "white",
          color: "black",
          marginLeft: 5,
          marginRight: 5
        }}
        title="Reset White"
        onPress={() =>
          dispatch({
            type: "reset_white",
            payload: (state.blue, state.green, state.red)
          })
        }
      ></Button>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  view: {
    borderWidth: 6,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignSelf: "center"
  },
  textOne: {
    borderWidth: 5,

    alignSelf: "center",
    fontSize: 16,
    padding: 5
  },
  textTwo: {
    borderWidth: 5,

    alignSelf: "center",
    fontSize: 16,
    padding: 5
  },
  textThree: {
    borderWidth: 5,

    alignSelf: "center",
    fontSize: 16,
    padding: 5
  }
});

export default SquareScreen;

// const [red, setRed] = useState(0);
// const [green, setGreen] = useState(0);
// const [blue, setBlue] = useState(0);

// console.log(red, green, blue);
// const setColor = (color, change) => {
//   switch (color) {
//     case "red":
//       red + change > 255 || red + change < 0 ? null : setRed(red + change);
//       return;
//     case "green":
//       green + change > 255 || green + change < 0
//         ? null
//         : setGreen(green + change);
//       return;
//     case "blue":
//       blue + change > 255 || blue + change < 0
//         ? null
//         : setBlue(blue + change);
//       return;
//   }
// };

// return (
//   <View>
//     <ColorCounter
//       onIncrease={() => setColor("red", COLOR_INCREMENT)}
//       onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
//       color="Red"
//     />
//     <ColorCounter
//       onIncrease={() => setColor("green", COLOR_INCREMENT)}
//       onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
//       color="Green"
//     />
//     <ColorCounter
//       onIncrease={() => setColor("blue", COLOR_INCREMENT)}
//       onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
//       color="Blue"
//     />
//     <View
//       style={{
//         height: 200,

//         backgroundColor: `rgb(${red}, ${green}, ${blue})`
//       }}
//     />
//   </View>
// );
