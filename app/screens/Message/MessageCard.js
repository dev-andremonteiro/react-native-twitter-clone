import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { width, colors } from "../../utils";

import Avatar from "../../components/Avatar";

class MessageCard extends React.Component {
  render() {
    let { user, userName, avatar, time, message } = this.props.data;
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: colors.white
          }
        ]}
      >
        <Avatar photo={avatar} size={52} />
        <View
          style={{
            paddingLeft: 10,
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              paddingTop: 5,
              alignItems: "flex-start",
              justifyContent: "flex-start"
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
              <Text
                style={{
                  fontSize: 16,
                  color: colors.dark_gray,
                  paddingLeft: 5
                }}
              >
                {userName}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: colors.dark_gray
              }}
            >
              {message}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ color: colors.dark_gray }}>{time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray
  }
});

export default MessageCard;
