import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { width, colors } from "../../utils";

import NavigationWraper from "../../components/NavigationWraper";

import { searchFeed } from "../../mock";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeaturedNews from "./FeaturedNews";
import Trends from "./Trends";
import TrendCard from "./TrendCard";

class SearchBar extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: 250,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 5,
          backgroundColor: "#eee"
        }}
      >
        <MaterialCommunityIcons
          style={{ alignSelf: "center" }}
          name={"magnify"}
          color={colors.light_gray}
          size={16}
        />
        <Text style={{ fontSize: 18, color: colors.light_gray, marginLeft: 5 }}>
          {"Search on Twitter"}
        </Text>
      </TouchableOpacity>
    );
  }
}

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
          <FeaturedNews
            data={searchFeed.main}
            onPress={() =>
              this.props.navigation.navigate("DynamicTitle", { last: "Search" })
            }
          />
          <View
            style={{
              height: 20,
              borderColor: colors.exlight_gray,
              borderTopWidth: StyleSheet.hairlineWidth,
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
          />

          {searchFeed.trends.map((i, n) => (
            <TouchableOpacity
              key={n.toString()}
              style={{
                borderColor: colors.exlight_gray,
                borderBottomWidth: StyleSheet.hairlineWidth
              }}
              onPress={() =>
                this.props.navigation.navigate("DynamicTitle", {
                  last: "Search"
                })
              }
            >
              <TrendCard data={i} index={n} />
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
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

export default Search;
