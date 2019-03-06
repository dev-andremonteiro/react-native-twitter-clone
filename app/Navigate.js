import React from "react";

import { StatusBar } from "react-native";

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Popular from "./screens/Popular";
import Saved from "./screens/Saved";
import Discover from "./screens/Discover";
import Configuration from "./screens/Configuration";
import Help from "./screens/Help";

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: Home,
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
      initialRouteName: "Home",
      headerMode: "none",
      cardStyle: { paddingTop: StatusBar.currentHeight }
    }
  )
);
