import React from "react";
import { View, Text } from "react-native";
import { HeaderBackButton, NavigationActions } from "react-navigation";

class app extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <HeaderBackButton
        onPress={() =>
          navigation.navigate(
            "Home",
            {},
            NavigationActions.navigate({ routeName: "Home" })
          )
        }
      />
    ),
    headerTitle: "Popular"
  });

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Popular Screen"}</Text>
      </View>
    );
  }
}

export default app;
