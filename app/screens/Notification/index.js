import React from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Slider
} from "react-native";
import { width, height, colors } from "../../utils";

import NavigationWraper from "../../components/NavigationWraper";

class Notification extends React.Component {
  state = { sec: 0, pos: 0 };

  mappingNumber(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  animateHeader = event => {
    let x = event.nativeEvent.contentOffset.x / 2;
    this.setState({ pos: x });
    this.setState({ sec: x >= width / 4 ? 1 : 0 });
  };

  render() {
    return (
      <NavigationWraper
        navigation={this.props.navigation}
        selected={2}
        headerStyle={{ borderBottomWidth: 0 }}
        rightIcon={
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              style={{ height: 28, width: 28 }}
              source={require("../../../assets/topGear.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              fontFamily: "HelveticaNeue-Bold"
            }}
          >
            {"Notifications"}
          </Text>
        }
      >
        <View
          style={{
            marginTop: 5,
            borderBottomColor: "#ccc",
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        >
          <View
            style={{
              paddingVertical: 15,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Text
              style={[
                {
                  fontSize: 15,
                  fontWeight: "500",
                  color: colors.dark_gray
                },
                this.state.sec === 0 && { color: colors.primary }
              ]}
            >
              {"All"}
            </Text>
            <Text
              style={[
                {
                  fontSize: 15,
                  fontWeight: "500",
                  color: colors.dark_gray
                },
                this.state.sec === 1 && { color: colors.primary }
              ]}
            >
              {"Mentions"}
            </Text>
          </View>
          <View
            style={{
              width: width / 2,
              backgroundColor: colors.primary,
              borderRadius: 5,
              height: 2,
              marginLeft: this.state.pos
            }}
          />
        </View>

        <ScrollView
          style={styles.container}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.animateHeader}
          scrollEventThrottle={16}
        >
          <View style={styles.container}>
            <Text>{"Hi!"}</Text>
          </View>
          <View style={styles.container}>
            <Text>{"Bye!"}</Text>
          </View>
        </ScrollView>
      </NavigationWraper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#eee"
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default Notification;
