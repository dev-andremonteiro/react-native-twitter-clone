import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { width } from "../../utils";

import DrawerWraper from "../../components/DrawerWraper";

class Message extends React.Component {
  render() {
    return (
      <DrawerWraper
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
        <View style={styles.container}>
          <Text>{"Hi!"}</Text>
        </View>
      </DrawerWraper>
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

export default Message;
