import React from "react";

import { StatusBar } from "react-native";

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./screens/Home";
import Search from "./screens/Search";
import Notification from "./screens/Notification";
import Message from "./screens/Message";

import UnderConstruction from "./screens/UnderConstruction";

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: createSwitchNavigator(
        {
          Home: Home,
          Search: Search,
          Notification: Notification,
          Message: Message
        },
        { initialRouteName: "Home" }
      ),
      Drawer: createStackNavigator({
        Profile: UnderConstruction,
        Popular: UnderConstruction,
        Saved: UnderConstruction,
        Discover: UnderConstruction,
        Configuration: UnderConstruction,
        "Help Center": UnderConstruction
      }),
      Details: createStackNavigator({
        Tweet: UnderConstruction,
        "New Tweet": UnderConstruction,
        "New Message": UnderConstruction,
        DynamicTitle: UnderConstruction
      })
    },
    {
      initialRouteName: "Main",
      headerMode: "none",
      cardStyle: { paddingTop: StatusBar.currentHeight }
    }
  )
);
