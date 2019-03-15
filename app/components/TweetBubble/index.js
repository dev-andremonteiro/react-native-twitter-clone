import React from "react";

import { View, Image, TouchableOpacity } from "react-native";

import { width, height, colors } from "../../utils";

export default class TweetBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          position: "absolute",
          top: height - 148,
          left: width - 80
        }}
        onPress={this.props.onBubblePress}
      >
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.props.message ? (
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../assets/tweet.png")}
            />
          ) : (
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../assets/message.png")}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
