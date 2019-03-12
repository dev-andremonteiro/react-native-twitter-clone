import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { width, colors } from "../../utils";

import NavigationWraper from "../../components/NavigationWraper";

import { searchFeed } from "../../mock";

import SearchBar from "./SearchBar";
import FeaturedNew from "./FeaturedNew";
import Trends from "./Trends";

class Search extends React.Component {
  render() {
    return (
      <NavigationWraper
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
        <ScrollView style={styles.container}>
          <FeaturedNew data={searchFeed.main} />
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: colors.exlight_gray,
              marginTop: 20
            }}
          />
          <Trends data={searchFeed.trends} />
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
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default Search;
