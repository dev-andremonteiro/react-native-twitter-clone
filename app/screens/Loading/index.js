import React from "react";
import { View, Text } from "react-native";

export default class Loading extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          {"This is the standard template of a \n" +
            "React Native project that uses: \n\n\n" +
            "Redux, Logger, Persist, Thunk, Firebase."}
        </Text>
      </View>
    );
  }
}
