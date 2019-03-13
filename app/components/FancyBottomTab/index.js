import React from "react";

import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { width, colors } from "../../utils";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabOption = function(props) {
  return (
    <TouchableOpacity
      style={{
        padding: 5,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
      }}
      onPress={props.onPress}
    >
      {props.icon}
    </TouchableOpacity>
  );
};

class FancyBottomTab extends React.Component {
  iconList = [
    <MaterialCommunityIcons
      name={"home-outline"}
      color={colors.secondary}
      size={26}
    />,
    <MaterialCommunityIcons
      name={"magnify"}
      color={colors.secondary}
      size={26}
    />,
    <MaterialCommunityIcons
      name={"bell-outline"}
      color={colors.secondary}
      size={26}
    />,
    <MaterialCommunityIcons
      name={"email-outline"}
      color={colors.secondary}
      size={26}
    />
  ];

  iconActiveList = [
    <MaterialCommunityIcons name={"home"} color={colors.primary} size={27} />,
    <MaterialCommunityIcons
      name={"magnify"}
      color={colors.primary}
      size={27}
    />,
    <MaterialCommunityIcons name={"bell"} color={colors.primary} size={27} />,
    <MaterialCommunityIcons name={"email"} color={colors.primary} size={27} />
  ];

  componentWillMount() {
    this.iconList[this.props.selected] = this.iconActiveList[
      this.props.selected
    ];
  }

  render() {
    return (
      <View
        style={{
          width: width,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          borderTopColor: "#ccc",
          borderTopWidth: StyleSheet.hairlineWidth
        }}
      >
        <TabOption
          icon={this.iconList[0]}
          onPress={this.props.navigation.bind(this, "Home")}
        />
        <TabOption
          icon={this.iconList[1]}
          onPress={this.props.navigation.bind(this, "Search")}
        />
        <TabOption
          icon={this.iconList[2]}
          onPress={this.props.navigation.bind(this, "Notification")}
        />
        <TabOption
          icon={this.iconList[3]}
          onPress={this.props.navigation.bind(this, "Message")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#fff"
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default FancyBottomTab;
