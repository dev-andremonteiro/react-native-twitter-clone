import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { colors } from "../../utils";

import { MaterialCommunityIcons } from "@expo/vector-icons";

class SearchBar extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: 250,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 5,
          backgroundColor: "#eee"
        }}
      >
        <MaterialCommunityIcons
          style={{ alignSelf: "center" }}
          name={"magnify"}
          color={colors.light_gray}
          size={16}
        />
        <Text style={{ fontSize: 18, color: colors.light_gray, marginLeft: 5 }}>
          {"Search on Twitter"}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default SearchBar;
