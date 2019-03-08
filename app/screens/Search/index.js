import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { width } from "../../utils";

import DrawerWraper from "../../components/DrawerWraper";
import SearchBar from "./SearchBar";

class Search extends React.Component {
  render() {
    return (
      <DrawerWraper
        navigation={this.props.navigation}
        selected={1}
        rightIcon={
          <TouchableOpacity style={{ padding: 5 }}>
            <Image
              style={{ height: 28, width: 28 }}
              source={require("../../../assets/topGear.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        }
        title={<SearchBar />}
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

export default Search;
