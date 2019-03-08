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

import Profile from "./screens/Profile";
import Popular from "./screens/Popular";
import Saved from "./screens/Saved";
import Discover from "./screens/Discover";
import Configuration from "./screens/Configuration";
import Help from "./screens/Help";

export default createAppContainer(
  createSwitchNavigator(
    {
      Normal: createSwitchNavigator(
        {
          Home: Home,
          Search: Search,
          Notification: Notification,
          Message: Message
        },
        { initialRouteName: "Home" }
      ),
      Drawer: createStackNavigator({
        Profile: Profile,
        Popular: Popular,
        Saved: Saved,
        Discover: Discover,
        Configuration: Configuration,
        Help: Help
      })
    },
    {
      initialRouteName: "Normal",
      headerMode: "none",
      cardStyle: { paddingTop: StatusBar.currentHeight }
    }
  )
);
