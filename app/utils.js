import React from "react";
import { Image, Dimensions } from "react-native";

import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

export const colors = {
  primary: "#1DA1F2",
  secondary: "#14171A",
  dark_gray: "#657786",
  light_gray: "#AAB8C2",
  exlight_gray: "#E1E8ED",
  exexlight_gray: "#F5F8FA",
  white: "#FFF"
};

export const drawerOptionList = [
  {
    icon: <FontAwesome name={"user-o"} color={colors.dark_gray} size={22} />,
    text: "Profile",
    nav: "Profile"
  },
  {
    icon: <Ionicons name={"ios-list-box"} color={colors.dark_gray} size={22} />,
    text: "Popular",
    nav: "Popular"
  },
  {
    icon: (
      <MaterialIcons
        name={"bookmark-border"}
        color={colors.dark_gray}
        size={26}
      />
    ),
    text: "Saved",
    nav: "Saved"
  },
  {
    icon: (
      <Image
        style={{ height: 22, width: 22 }}
        source={require("../assets/thunder.png")}
        resizeMode={"contain"}
      />
    ),
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
    nav: "Help Center"
  }
];

export const width = Dimensions.get("window").width;
export const profileWidth = width - width * 0.15;
export const height = Dimensions.get("window").height;

function hexToRGBArray(hex) {
  let hexArr = hex.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
  return `rgba(${hexArr[0]},${hexArr[1]},${hexArr[2]},`;
}

export const rgbaColors = {
  primary: hexToRGBArray(colors.primary),
  secondary: hexToRGBArray(colors.secondary),
  dark_gray: hexToRGBArray(colors.dark_gray),
  light_gray: hexToRGBArray(colors.light_gray),
  exlight_gray: hexToRGBArray(colors.exlight_gray),
  exexlight_gray: hexToRGBArray(colors.exexlight_gray),
  white: hexToRGBArray(colors.white)
};

import Hyperlink from "react-native-hyperlink";
const customLinkify = require("linkify-it")()
  .add("@", {
    validate: function(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.twitter) {
        self.re.twitter = new RegExp(
          "^([a-zA-Z0-9_]){1,15}(?!_)(?=$|" + self.re.src_ZPCc + ")"
        );
      }
      if (self.re.twitter.test(tail)) {
        // Linkifier allows punctuation chars before prefix,
        // but we additionally disable `@` ("@@mention" is invalid)
        if (pos >= 2 && tail[pos - 2] === "@") {
          return false;
        }
        return tail.match(self.re.twitter)[0].length;
      }
      return 0;
    },
    normalize: function(match) {
      match.url = "https://twitter.com/" + match.url.replace(/^@/, "");
    }
  })
  .add("#", {
    validate: function(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.twitter) {
        self.re.twitter = new RegExp(
          "^([a-zA-Z0-9_]){1,30}(?!_)(?=$|" + self.re.src_ZPCc + ")"
        );
      }
      if (self.re.twitter.test(tail)) {
        // Linkifier allows punctuation chars before prefix,
        // but we additionally disable `@` ("@@mention" is invalid)
        if (pos >= 2 && tail[pos - 2] === "#") {
          return false;
        }
        return tail.match(self.re.twitter)[0].length;
      }
      return 0;
    },
    normalize: () => {}
  });

export function generateTwitterText(text) {
  return (
    <Hyperlink
      linkify={customLinkify}
      linkStyle={{ color: colors.primary, fontWeight: "400" }}
    >
      {text}
    </Hyperlink>
  );
}
