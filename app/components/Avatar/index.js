import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../utils";

const Avatar = function(props) {
  let avatarSize = 30;
  if (props.avatarSize) avatarSize = props.avatarSize;

  let headSize = avatarSize;
  return (
    <View
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize * 2,
        backgroundColor: colors.exlight_gray,
        alignItems: "center",
        marginVertical: 10
      }}
    >
      <View
        style={{
          width: avatarSize / 3,
          height: avatarSize / 3,
          borderRadius: headSize * 2,
          marginTop: avatarSize / 10,
          backgroundColor: colors.dark_gray
        }}
      />
      <View
        style={{
          width: avatarSize / 1.7,
          height: avatarSize / 2.5,
          borderRadius: 16.5,
          marginTop: avatarSize / 15,
          backgroundColor: colors.dark_gray
        }}
      />
    </View>
  );
};

export default Avatar;
