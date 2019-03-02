import React from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

const width = Dimensions.get("window").width;
const profileWidth = width - width * 0.15;
const height = Dimensions.get("window").height;

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

class Profile extends React.Component {
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
            styles.borderBottom,
            { flexDirection: "row", justifyContent: "space-between" }
          ]}
        >
          <View
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Avatar avatarSize={50} />
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#14171A" }}>
              {"dev-andremonteiro"}
            </Text>
            <Text style={{ fontSize: 16, color: "#657786", marginVertical: 5 }}>
              {"@DAndremonteiro"}
            </Text>
            <Text
              style={{ fontSize: 16, marginVertical: 10, color: "#657786" }}
            >
              {"Extra text"}
            </Text>
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.profileContainer]}>
          <Text>{"Profile"}</Text>
        </View>
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
          contentOffset={{ x: profileWidth, y: 0 }}
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
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
