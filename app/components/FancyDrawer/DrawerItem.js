import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { colors, profileWidth } from "../../utils";

const DrawerItem = function(props) {
  if (!props.data) return <View style={styles.line} />;

  return (
    <TouchableHighlight
      style={styles.profileContainer}
      activeOpacity={0.85}
      underlayColor={colors.exlight_gray}
      onPress={() => props.changeScreen(props.data.nav)}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        {props.data.icon && (
          <View style={styles.iconWraper}>{props.data.icon}</View>
        )}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            fontFamily: "Helvetica Neue",
            color: colors.secondary
          }}
        >
          {props.data.text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  line: {
    marginVertical: 10,
    width: profileWidth,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.exlight_gray
  },
  profileContainer: {
    width: profileWidth,
    paddingRight: 15,
    paddingLeft: 25,
    paddingVertical: 15
  },
  iconWraper: {
    height: 24,
    width: 24,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DrawerItem;
