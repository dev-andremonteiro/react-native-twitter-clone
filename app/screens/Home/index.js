import React from "react";
import {
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import { width, colors } from "../../utils";
import { homeFeed } from "../../mock";

import NavigationWraper from "../../components/NavigationWraper";
import Tweet from "../../components/Tweet";

class Home extends React.Component {
  render() {
    return (
      <NavigationWraper
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
        <ScrollView style={styles.container}>
          {homeFeed.map((i, n) => (
            <TouchableOpacity
              key={n.toString()}
              style={{
                borderColor: colors.exlight_gray,
                borderBottomWidth: StyleSheet.hairlineWidth
              }}
              onPress={() =>
                this.props.navigation.navigate("Tweet", { last: "Home" })
              }
            >
              <Tweet data={i} />
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
  }
});

export default Home;
