import React from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { width, colors } from "../../utils";

import { messageFeed } from "../../mock";

import NavigationWraper from "../../components/NavigationWraper";
import MessageCard from "./MessageCard";

class Message extends React.Component {
  render() {
    return (
      <NavigationWraper
        navigation={this.props.navigation}
        selected={3}
        rightIcon={null}
        title={
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              fontFamily: "HelveticaNeue-Bold"
            }}
          >
            {"Messages"}
          </Text>
        }
      >
        <ScrollView style={styles.container}>
          {messageFeed.map((i, n) => (
            <TouchableOpacity
              key={n.toString()}
              style={{
                borderColor: colors.exlight_gray,
                borderBottomWidth: StyleSheet.hairlineWidth
              }}
              onPress={() =>
                this.props.navigation.navigate("DynamicTitle", {
                  last: "Message"
                })
              }
            >
              <MessageCard data={i} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </NavigationWraper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default Message;
