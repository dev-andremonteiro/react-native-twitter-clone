import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { width, colors } from "../../utils";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Avatar from "../../components/Avatar";

const bolderText = text => {
  if (text.indexOf("*") === -1) return text;

  let boldFormatedText;
  let textSplit = text.split("*");
  for (let i = 0; i < textSplit.length; i++) {
    let item = textSplit[i];
    if (item !== "") {
      boldFormatedText = (
        <Text style={[{ fontSize: 16 }, i % 2 !== 0 && { fontWeight: "600" }]}>
          {boldFormatedText}
          {item}
        </Text>
      );
    }
  }

  return <View style={{ flexDirection: "row" }}>{boldFormatedText}</View>;
};

class NotificationCard extends React.Component {
  state = {
    discover: (
      <MaterialCommunityIcons
        name={"star-four-points"}
        size={24}
        color={"#929"}
        style={{ marginLeft: 30 }}
      />
    ),
    follow: (
      <MaterialCommunityIcons
        name={"account"}
        size={24}
        color={colors.primary}
        style={{ marginLeft: 30 }}
      />
    ),
    like: (
      <MaterialCommunityIcons
        name={"cards-heart"}
        size={24}
        color={"#f78"}
        style={{ marginLeft: 30 }}
      />
    )
  };

  render() {
    let { type, users, title, desc } = this.props.data;

    let icon = this.state[type];

    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 20,
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: colors.white
        }}
      >
        {icon}
        <View
          style={{
            paddingLeft: 10,
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            {users.map((i, n) => (
              <Avatar
                photo={i}
                key={n}
                style={{
                  marginRight: 2
                }}
              />
            ))}
          </View>
          <View
            style={{
              paddingTop: 5,
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            {bolderText(title)}
            <Text
              style={{
                color: colors.dark_gray
              }}
            >
              {desc}
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#FFF"
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default NotificationCard;
