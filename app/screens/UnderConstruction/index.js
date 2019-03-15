import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { HeaderBackButton, NavigationActions } from "react-navigation";

class app extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <HeaderBackButton
        onPress={() =>
          navigation.navigate(
            navigation.state.params.last,
            {},
            NavigationActions.navigate({ routeName: "Main" })
          )
        }
      />
    ),
    headerTitle: navigation.state.routeName
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
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          {"Sadly, This screen is not implemented yet."}
        </Text>
        <Text style={{ paddingVertical: 10, fontSize: 12 }}>
          {"You can help me improve this project by forking it."}
        </Text>
        <TouchableOpacity
          style={{ paddingVertical: 20 }}
          onPress={() =>
            Linking.openURL(
              "https://github.com/dev-andremonteiro/react-native-twitter-clone"
            )
          }
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
              color: "#11e",
              textDecorationLine: "underline"
            }}
          >
            {"https://github.com/dev-andremonteiro/react-native-twitter-clone"}
          </Text>
        </TouchableOpacity>
        <Text style={{ paddingTop: 5, fontSize: 12 }}>
          {"Any help is appreciated! :)"}
        </Text>
      </View>
    );
  }
}

export default app;
