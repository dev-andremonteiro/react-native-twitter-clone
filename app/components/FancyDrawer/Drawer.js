import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Avatar from "../../components/Avatar";
import DrawerItem from "./DrawerItem.js";

import { FontAwesome, Feather } from "@expo/vector-icons";

import {
  rgbaColors,
  colors,
  profileWidth,
  width,
  drawerOptionList
} from "../../utils";

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBorderTop: false,
      showBoderBottom: false,
      list: drawerOptionList,
      borderColor: "",
      customExtra: false
    };
  }

  componentWillMount() {
    this.setState({
      borderColor: rgbaColors.light_gray
    });

    if (typeof this.props.profileExtra !== "string")
      this.setState({ customExtra: true });
  }

  _showBorders = event => {
    let y = event.nativeEvent.contentOffset.y;
    if (y < 8 && y > -8)
      this.setState({ showBorderTop: false, showBoderBottom: false });
    if (this.state.showBorderTop || this.state.showBoderBottom) return;

    if (y > 10) this.setState({ showBorderTop: true });
    if (y < -10) this.setState({ showBoderBottom: true });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: profileWidth,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={[
            styles.profileContainer,
            { flexDirection: "row", justifyContent: "space-between" }
          ]}
        >
          <View
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Avatar size={50} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                color: colors.secondary
              }}
            >
              {this.props.profileName}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.dark_gray,
                marginVertical: 5
              }}
            >
              {this.props.profileUserName}
            </Text>
            <View style={{ marginVertical: 10 }}>
              {this.state.customExtra ? (
                this.props.profileExtra
              ) : (
                <Text style={{ fontSize: 16, color: colors.dark_gray }}>
                  {this.props.profileExtra}
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-start"
            }}
          >
            <TouchableOpacity>
              <Image
                style={{ height: 30, width: 30 }}
                resizeMode={"contain"}
                source={require("../../../assets/topMore.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: profileWidth,
            height: StyleSheet.hairlineWidth,
            backgroundColor:
              this.state.borderColor +
              `${this.state.showBorderTop ? "1" : "0"})`
          }}
        />

        <ScrollView
          style={{
            flex: 1
          }}
          onScroll={this._showBorders}
          scrollEventThrottle={16}
        >
          {this.state.list.map((item, index) => (
            <DrawerItem
              key={index.toString()}
              data={item}
              changeScreen={this.props.changeScreen}
            />
          ))}
        </ScrollView>

        <View
          style={{
            width: profileWidth,
            height: StyleSheet.hairlineWidth,
            backgroundColor:
              this.state.borderColor +
              `${this.state.showBoderBottom ? "1" : "0"})`
          }}
        />

        <View
          style={[
            styles.profileContainer,
            { flexDirection: "row", justifyContent: "space-between" }
          ]}
        >
          <TouchableOpacity>
            <Feather name={"moon"} color={colors.primary} size={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name={"qrcode"} color={colors.primary} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white
  },
  profileContainer: {
    width: profileWidth,
    paddingRight: 15,
    paddingLeft: 25,
    paddingVertical: 10
  },
  borderBottom: {
    borderBottomColor: colors.dark_gray,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default Drawer;
