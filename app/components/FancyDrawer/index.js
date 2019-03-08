import React from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Drawer from "./Drawer";

import { rgbaColors, colors, width, height, profileWidth } from "../../utils";

function mappingNumber(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export default class FancyDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      opacity: 0
    };
  }

  componentWillMount() {
    this.setState({
      fadedColor: rgbaColors.exlight_gray
    });
  }

  _showProfile = z => this.scroll.scrollTo({ x: z, y: 0, animated: true });

  _handleScroll = event => {
    let x = event.nativeEvent.contentOffset.x;
    if (x >= profileWidth && !this.state.isScrolled) return;
    else if (x >= profileWidth && this.state.isScrolled) {
      this.setState({ isScrolled: false });
      this.props.fading(0);
    } else {
      let y = mappingNumber(x, 300, 0, 0, 0.7);
      this.setState({
        isScrolled: true,
        opacity: y
      });
      y = mappingNumber(x, 300, 0, 0, 1);
      this.props.fading(y);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={this._handleScroll}
          contentOffset={{ x: profileWidth, y: 0 }}
          ref={ref => (this.scroll = ref)}
        >
          <Drawer
            changeScreen={this.props.navigation}
            profileName={this.props.profileName}
            profileUserName={this.props.profileUserName}
            profileExtra={this.props.profileExtra}
          />

          <View
            style={[
              styles.container,
              {
                borderLeftColor: colors.exlight_gray,
                borderLeftWidth: StyleSheet.hairlineWidth
              }
            ]}
          >
            {this.state.isScrolled && (
              <TouchableOpacity
                onPress={this._showProfile.bind(this, profileWidth)}
                style={[
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: width,
                    height: height,
                    backgroundColor:
                      this.state.fadedColor + `${this.state.opacity})`,
                    zIndex: 10
                  }
                ]}
                activeOpacity={1.5}
              />
            )}
            {this.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white
  }
});
