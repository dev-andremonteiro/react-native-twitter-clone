import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import FancyDrawer from "../FancyDrawer";

const width = Dimensions.get("window").width;

class Feed extends React.Component {
  render() {
    return (
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
    );
  }
}

class Home extends React.Component {
  _changeScreen = screen => this.props.navigation.navigate(screen);

  render() {
    return (
      <FancyDrawer
        navigation={this._changeScreen}
        title={"Home"}
        profileName={"Surname Name"}
        profileUserName={"@username"}
        profileExtra={"Extra Text"}
      >
        <Feed />
      </FancyDrawer>
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
