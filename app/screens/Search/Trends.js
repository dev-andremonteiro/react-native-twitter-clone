import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { width, height, colors } from "../../utils";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const line = StyleSheet.hairlineWidth;

export default class Trends extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white
        }}
      >
        <View
          style={{
            padding: 15,
            borderBottomColor: colors.exlight_gray,
            borderBottomWidth: line
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600" }}>{}</Text>
        </View>

        {this.props.data.map((item, index) => {
          let { title, tweets } = item;

          return (
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 15,
                paddingVertical: 20,
                borderBottomColor: colors.exlight_gray,
                borderBottomWidth: line,
                alignItems: "flex-start",
                justifyContent: "space-between"
              }}
              key={index.toString()}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: colors.dark_gray,
                    fontSize: 20,
                    fontWeight: "300"
                  }}
                >
                  {(index + 1).toString()}
                </Text>
                <View style={{ paddingLeft: 15 }}>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16
                    }}
                  >
                    {title}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 5,
                      color: colors.dark_gray,
                      fontWeight: "200"
                    }}
                  >
                    {tweets}
                  </Text>
                </View>
              </View>

              <View style={{ paddingRight: 5 }}>
                <SimpleLineIcons
                  name={"arrow-down"}
                  size={10}
                  color={colors.dark_gray}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
