import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { width, colors } from "../../utils";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default class TrendCard extends React.Component {
  render() {
    let { title, tweets } = this.props.data;
    let { index } = this.props;

    if (index === 0) {
      return (
        <View style={styles.content}>
          <Text style={styles.sectionText}>{title}</Text>
        </View>
      );
    }
    if (index === 5) {
      return (
        <View
          style={[
            styles.content,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }
          ]}
        >
          <Text style={styles.showMoreText}>{title}</Text>
          <SimpleLineIcons
            name={"arrow-right"}
            size={10}
            color={colors.dark_gray}
          />
        </View>
      );
    }

    return (
      <View
        style={[
          styles.content,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20
          }
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: colors.dark_gray,
              fontSize: 20,
              fontWeight: "300"
            }}
          >
            {index.toString()}
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
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: width,
    backgroundColor: colors.white,
    padding: 15
  },
  sectionText: {
    fontSize: 20,
    fontWeight: "600"
  },
  showMoreText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "300"
  }
});
