import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Avatar from "../../components/Avatar";

import { generateTwitterText, colors, width } from "../../utils";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default class Tweet extends React.Component {
  render() {
    let {
      type,
      user,
      userName,
      avatar,
      time,
      message,
      responses,
      retweets,
      likes
    } = this.props.data;

    return (
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderBottomColor: colors.exlight_gray,
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Avatar size={50} photo={avatar} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{user}</Text>
                <Text style={{ paddingLeft: 5, color: colors.dark_gray }}>
                  {userName}
                </Text>
                <View
                  style={{
                    backgroundColor: colors.dark_gray,
                    marginHorizontal: 4,
                    width: 1.5,
                    height: 1.5,
                    borderRadius: 3
                  }}
                />
                <Text style={{ color: colors.dark_gray }}>{time}</Text>
              </View>
              <SimpleLineIcons
                name={"arrow-down"}
                size={10}
                color={colors.dark_gray}
              />
            </View>
            <View style={{ flex: 1 }}>
              {generateTwitterText(
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "300",
                    fontFamily: "HelveticaNeue"
                  }}
                >
                  {message}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
