import React from "react";
import { View, Text } from "react-native";

import FancyDrawer from "../FancyDrawer";
import Header from "../Header";
import FancyBottomTab from "../FancyBottomTab";
import TweetBuble from "../TweetBuble";

class NavigationWraper extends React.Component {
  _handleShowDrawer = () => this.drawer._showProfile(0);
  _handleHeaderFade = i => this.header._fadeAvatar(i);

  _changeScreen = screen => this.props.navigation.navigate(screen);

  render() {
    return (
      <FancyDrawer
        fading={this._handleHeaderFade}
        ref={ref => (this.drawer = ref)}
        navigation={this._changeScreen}
        profileName={"dev-andremonteiro"}
        profileUserName={"@DAndremonteiro"}
        profileExtra={
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{"10 "}</Text>
            <Text
              style={{
                fontSize: 16,
                color: "#657786",
                fontWeight: "500",
                marginRight: 20
              }}
            >
              {"Following"}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{"20 "}</Text>
            <Text style={{ fontSize: 16, color: "#657786" }}>
              {"Followers"}
            </Text>
          </View>
        }
      >
        <Header
          ref={ref => (this.header = ref)}
          showProfile={this._handleShowDrawer}
          title={this.props.title}
          rightIcon={this.props.rightIcon}
          style={this.props.headerStyle}
        />
        {this.props.children}
        <TweetBuble message={this.props.selected !== 3} />
        <FancyBottomTab
          selected={this.props.selected}
          navigation={this._changeScreen}
        />
      </FancyDrawer>
    );
  }
}

export default NavigationWraper;
