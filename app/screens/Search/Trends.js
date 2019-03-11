import React from "react";

import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { width, height, colors } from "../../utils";

export default class Trends extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>{"Worldwide Trends"}</Text>
        </View>
        {this.props.data.map((item, index) => {
          let { title, tweets } = item;

          return (
            <View style={{ flexDirection: "row" }} key={index.toString()}>
              <View style={{ flex: 2 }}>
                <Text>{index.toString()}</Text>
              </View>
              <View style={{ flex: 7 }}>
                <Text>{title}</Text>
                <Text>{tweets}</Text>
              </View>
              <View
                style={{
                  flex: 1
                }}
              >
                <View
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: "#c21"
                  }}
                />
              </View>
            </View>
          );
        })}
        <View>
          <Text>{"Show more"}</Text>
        </View>
      </View>
    );
  }
}
