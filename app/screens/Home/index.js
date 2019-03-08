import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { width } from "../../utils";

import DrawerWraper from "../../components/DrawerWraper";

class Home extends React.Component {
  render() {
    return (
      <DrawerWraper
        navigation={this.props.navigation}
        selected={0}
        rightIcon={
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../../../assets/topStar.png")}
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
            {"Home"}
          </Text>
        }
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          {[...Array(15).keys()].map(i => (
            <View
              style={{
                padding: 10,
                borderBottomColor: "#ccc",
                borderBottomWidth: StyleSheet.hairlineWidth
              }}
              key={i.toString()}
            >
              <Text>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
                  "sed do eiusmod tempor incididunt ut labore et " +
                  "dolore magna aliqua. Ut enim ad minim veniam, " +
                  "quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                  "ex ea commodo consequat. Duis aute irure dolor in reprehenderit  " +
                  "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
              </Text>
            </View>
          ))}
        </ScrollView>
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

export default Home;
