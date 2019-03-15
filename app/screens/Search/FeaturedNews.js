import React from "react";

import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { width } from "../../utils";

export default class FeaturedNew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, topic, time, image } = this.props.data;

    return (
      <TouchableOpacity style={{ width: width, height: 200 }} onPress={this.props.onPress}>
        <ImageBackground
          source={image}
          resizeMode={"cover"}
          style={{
            flex: 1,
            backgroundColor: "#ccc",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: 15
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "500" }}>
              {topic}
            </Text>
            <View
              style={{
                backgroundColor: "#FFF",
                marginHorizontal: 4,
                width: 2,
                height: 2,
                borderRadius: 4
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>{time}</Text>
          </View>
          <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "700" }}>
            {title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
