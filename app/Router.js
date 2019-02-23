import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import Loading from "./screens/Loading";

export default createAppContainer(
  createStackNavigator(
    {
      Loading: Loading
    },
    {
      initialRouteName: "Loading",
      headerMode: "none"
    }
  )
);
