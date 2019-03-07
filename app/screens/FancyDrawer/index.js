import React from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

//--------------------------CONFIGURATION-----------------------------------------
const colors = {
  background: "#ffffff",
  darkSecondary: "#AAB8C2",
  secondary: "#e1e8ed",
  primary: "#657786",
  black: "#14171A"
};

const drawerOptionList = [
  {
    icon: <FontAwesome name={"user-o"} color={colors.primary} size={22} />,
    text: "Profile",
    nav: "Profile"
  },
  {
    icon: <Ionicons name={"ios-list-box"} color={colors.primary} size={22} />,
    text: "Popular",
    nav: "Popular"
  },
  {
    icon: (
      <MaterialIcons
        name={"bookmark-border"}
        color={colors.primary}
        size={22}
      />
    ),
    text: "Saved",
    nav: "Saved"
  },
  {
    icon: <Ionicons name={"ios-search"} color={colors.primary} size={22} />,
    text: "Discover",
    nav: "Discover"
  },
  null,
  {
    text: "Configuration",
    nav: "Configuration"
  },
  {
    text: "Help Center",
    nav: "Help"
  }
];

//--------------------------------------------------------------------------------------------

const width = Dimensions.get("window").width;
const profileWidth = width - width * 0.15;
const height = Dimensions.get("window").height;

hexToRGBArray = hex => hex.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));

const Avatar = function(props) {
  let avatarSize = 30;
  if (props.avatarSize) avatarSize = props.avatarSize;

  let headSize = avatarSize;
  return (
    <View
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize * 2,
        backgroundColor: colors.secondary,
        alignItems: "center",
        marginVertical: 10
      }}
    >
      <View
        style={{
          width: avatarSize / 3,
          height: avatarSize / 3,
          borderRadius: headSize * 2,
          marginTop: avatarSize / 10,
          backgroundColor: colors.primary
        }}
      />
      <View
        style={{
          width: avatarSize / 1.7,
          height: avatarSize / 2.5,
          borderRadius: 16.5,
          marginTop: avatarSize / 15,
          backgroundColor: colors.primary
        }}
      />
    </View>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faded: 0
    };
  }

  _fadeAvatar(n) {
    this.setState({ faded: n });
  }

  render() {
    return (
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            width: width,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: StyleSheet.hairlineWidth
          }
        ]}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            width: 30,
            height: 30,
            backgroundColor: `rgba(255,255,255,${this.state.faded})`,
            zIndex: 9,
            padding: 5
          }}
          onPress={this.props.showProfile}
          activeOpacity={1.5}
        />
        <Avatar />

        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            fontFamily: "HelveticaNeue-Bold"
          }}
        >
          {this.props.title}
        </Text>
        <TouchableOpacity style={{ padding: 5 }} disabled>
          <View
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const ProfileItem = function(props) {
  if (!props.data)
    return (
      <View
        style={[
          {
            marginVertical: 10
          },
          styles.borderBottom
        ]}
      />
    );

  return (
    <TouchableHighlight
      style={[styles.profileContainer]}
      activeOpacity={0.85}
      underlayColor={colors.secondary}
      onPress={() => props.changeScreen(props.data.nav)}
    >
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center"
          }
        ]}
      >
        {props.data.icon && (
          <View style={{ marginRight: 20 }}>{props.data.icon}</View>
        )}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            fontFamily: "Helvetica Neue",
            color: colors.black
          }}
        >
          {props.data.text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBorderTop: false,
      showBoderBottom: false,
      list: drawerOptionList,
      borderColor: ""
    };
  }

  componentWillMount() {
    let hexArray = hexToRGBArray(colors.darkSecondary);
    this.setState({
      borderColor: `rgba(${hexArray[0]},${hexArray[1]},${hexArray[2]},`
    });
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
            <Avatar avatarSize={50} />
            <Text
              style={{ fontSize: 20, fontWeight: "800", color: colors.black }}
            >
              {this.props.profileName}
            </Text>
            <Text
              style={{ fontSize: 16, color: colors.primary, marginVertical: 5 }}
            >
              {this.props.profileUserName}
            </Text>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16, color: colors.primary }}>
                {this.props.profileExtra}
              </Text>
            </View>
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
            <ProfileItem
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

        <View style={[styles.profileContainer]}>
          <View style={{ height: 25, width: 25 }} />
        </View>
      </View>
    );
  }
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
    let hexArray = hexToRGBArray(colors.secondary);
    this.setState({
      fadedColor: `rgba(${hexArray[0]},${hexArray[1]},${hexArray[2]},`
    });
  }

  mappingNumber(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  _showProfile = z => {
    this.scroll.scrollTo({ x: z, y: 0, animated: true });
  };

  _handleScroll = event => {
    let x = event.nativeEvent.contentOffset.x;
    if (x >= profileWidth && !this.state.isScrolled) return;
    else if (x >= profileWidth && this.state.isScrolled) {
      this.setState({ isScrolled: false });
      this.header._fadeAvatar(0);
    } else {
      let y = this.mappingNumber(x, 300, 0, 0, 0.7);
      this.setState({
        isScrolled: true,
        opacity: y
      });
      y = this.mappingNumber(x, 300, 0, 0, 1);
      this.header._fadeAvatar(y);
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
          <Profile
            changeScreen={this.props.navigation}
            profileName={this.props.profileName}
            profileUserName={this.props.profileUserName}
            profileExtra={this.props.profileExtra}
          />
          <View
            style={[
              styles.container,
              {
                borderLeftColor: "#ccc",
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

            <Header
              showProfile={this._showProfile.bind(this, 0)}
              ref={ref => (this.header = ref)}
              title={this.props.title}
            />
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
    backgroundColor: colors.background
  },
  profileContainer: {
    width: profileWidth,
    paddingRight: 15,
    paddingLeft: 25,
    paddingVertical: 15
  },
  borderBottom: {
    borderBottomColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
