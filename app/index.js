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

const width = Dimensions.get("window").width;
const profileWidth = width - width * 0.15;
const height = Dimensions.get("window").height;

const Avatar = function(props) {
  let avatarSize;
  if (!props.avatarSize) avatarSize = 30;
  else avatarSize = props.avatarSize;
  let headSize = avatarSize;
  return (
    <View
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize * 2,
        backgroundColor: "#E1E8ED",
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
          backgroundColor: "#657786"
        }}
      />
      <View
        style={{
          width: avatarSize / 1.7,
          height: avatarSize / 2.5,
          borderRadius: 16.5,
          marginTop: avatarSize / 15,
          backgroundColor: "#657786"
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
          {"Home"}
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

class Feed extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          padding: 15
        }}
      >
        {[...Array(15).keys()].map(i => (
          <View
            style={{
              flex: 1,
              padding: 10,
              borderBottomColor: "#ccc",
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
            key={i.toString()}
          >
            <Text>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
                "sed do eiusmod tempor incididunt ut labore et " +
                "dolore magna aliqua. Ut enim ad minim veniam, " +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                "ex ea commodo consequat. Duis aute irure dolor in reprehenderit  " +
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
            </Text>
          </View>
        ))}
      </ScrollView>
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
      underlayColor={"#E1E8ED"}
      onPress={() => {}}
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
          <View style={{ width: 22, height: 22, marginRight: 20 }}>
            {props.data.icon}
          </View>
        )}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            fontFamily: "Helvetica Neue"
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
      list: [
        {
          icon: <FontAwesome name={"user-o"} color={"#657786"} size={22} />,
          text: "Profile"
        },
        {
          icon: <Ionicons name={"ios-list-box"} color={"#657786"} size={22} />,
          text: "Popular"
        },
        {
          icon: (
            <MaterialIcons
              name={"bookmark-border"}
              color={"#657786"}
              size={22}
            />
          ),
          text: "Saved"
        },
        {
          icon: <Ionicons name={"ios-search"} color={"#657786"} size={22} />,
          text: "Discover"
        },
        null,
        {
          text: "Configuration"
        },
        {
          text: "Help Center"
        }
      ]
    };
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
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#14171A" }}>
              {"Surname Name"}
            </Text>
            <Text style={{ fontSize: 16, color: "#657786", marginVertical: 5 }}>
              {"@username"}
            </Text>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16, color: "#657786" }}>
                {"Extra custom text"}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: profileWidth,
            height: StyleSheet.hairlineWidth,
            backgroundColor: `rgba(170,184,194,${
              this.state.showBorderTop ? "1" : "0"
            })`
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
            <ProfileItem data={item} key={index.toString()} />
          ))}
        </ScrollView>

        <View
          style={{
            width: profileWidth,
            height: StyleSheet.hairlineWidth,
            backgroundColor: `rgba(170,184,194,${
              this.state.showBoderBottom ? "1" : "0"
            })`
          }}
        />

        <View style={[styles.profileContainer]}>
          <View style={{ height: 25, width: 25 }} />
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      opacity: 0
    };
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
          //contentOffset={{ x: profileWidth, y: 0 }}
          ref={ref => (this.scroll = ref)}
        >
          <Profile />
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
                    backgroundColor: `rgba(225,232,237,${this.state.opacity})`,
                    zIndex: 10
                  }
                ]}
                activeOpacity={1.5}
              />
            )}

            <Header
              showProfile={this._showProfile.bind(this, 0)}
              ref={ref => (this.header = ref)}
            />
            <Feed />
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
    backgroundColor: "#fff"
  },
  profileContainer: {
    width: profileWidth,
    paddingRight: 15,
    paddingLeft: 25,
    paddingVertical: 15
  },
  borderBottom: {
    borderBottomColor: "#657786",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

/**
 * <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{"10 "}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#657786",
                    fontWeight: "500",
                    marginRight: 5
                  }}
                >
                  {"Following"}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{"20 "}</Text>
                <Text
                  style={{ fontSize: 16, color: "#657786", marginRight: 5 }}
                >
                  {"Followers"}
                </Text>
              </View>
 */
