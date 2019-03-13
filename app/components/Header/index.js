import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { width, rgbaColors } from "../../utils";

import Avatar from "../Avatar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faded: 0
    };
  }

  componentWillMount() {
    this.setState({
      borderColor: rgbaColors.light_gray
    });
  }

  _fadeAvatar(n) {
    this.setState({ faded: n });
  }

  render() {
    let icon = this.props.rightIcon;
    if (!this.props.rightIcon) {
      icon = <View style={{ width: 30, height: 30 }} />;
    }

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          style={[
            styles.touchableMask,
            {
              backgroundColor: `rgba(255,255,255,${this.state.faded})`
            }
          ]}
          onPress={this.props.showProfile}
          activeOpacity={1.5}
        />
        <Avatar />
        {this.props.title}
        {icon}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: width,
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  touchableMask: {
    position: "absolute",
    top: 5,
    left: 10,
    width: 30,
    height: 30,
    zIndex: 9,
    padding: 5
  }
});

export default Header;
