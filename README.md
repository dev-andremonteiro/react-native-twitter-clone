<p align="center" >
    <img alt="react-native-fancy-drawer" src="https://thumbs.gfycat.com/MajesticComplicatedAsianwaterbuffalo-size_restricted.gif" width="260" height="510" />
</p>

<p align="center">
<a title='License' href="https://github.com/FaridSafi/react-native-gifted-chat/blob/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
</a>
  </p>
  <p align="center">
 <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=expo.io/@menorme/fancy-drawer">
  </p>

# Fancy Drawer App

A Drawer app built with [React Native](https://github.com/facebook/react-native) and [Expo](https://github.com/expo/expo).

## Features

### Animations

- Push Content Page Right
- Fade Content Page with 70% Mask
- Fade Avatar on Header
- Show/Hide Borders on Drawer Scroll

### Actions

- Swipe Right
- Avatar Click
- Navigate to Screens on Drawer

**Simple to customize Colors and Drawer Items**

## Details

Created with **create-react-native-app**.

Packages used:

- **Expo**
- **React Navigation**

## Installation

### with Expo

- Clone this repo `git clone git@github.com/dev-andremonteiro/react-native-fancy-drawer.git`
- `cd react-native-fancy-drawer`
- run `npm install`
- run `expo start`

### without Expo

**Make sure you have ExpoCLI installed `npm install -g expo-cli`**

- Clone this repo `git clone git@github.com/dev-andremonteiro/react-native-fancy-drawer.git`
- `cd react-native-fancy-drawer`
- `expo eject`

## Customize it!

**Change colors**

Open `FancyDrawer/index.js`
Change colors to your preference!

```jsx
const colors = {
  background: "#ffffff",
  darkSecondary: "#AAB8C2",
  secondary: "#e1e8ed",
  primary: "#657786",
  black: "#14171A"
};
```

**Change Options in the Drawer**

Open `FancyDrawer/index.js`
Just change the itens as you want :D

```jsx
const drawerOptionList = [
  {
    icon: <FontAwesome name={"user-o"} color={colors.primary} size={22} />,
    text: "Profile",
    nav: "Profile"
  },
  ...{
    text: "Help Center",
    nav: "Help"
  }
];
```

Option Item properties:

- _icon_: used to render an icon on the drawer option (NOT Required)
- _text_: used to render the title of the option (Required)
- _nav_: used to navigate to the screen provided (Required)

In case of _null_ it's rendered a COOL options separator.

## Help me Improve :)

- [ ] separete components used on FancyDrawer on different files
- [ ] limit scroll on extremes of horizontal scrollview
- [ ] add custom avatar
- [ ] Haptic FeedBack on Profile Button
- [ ] touchable not activating fast on Profile page
- [ ] fix stacking screens while navigating (swipe back bug)
- [ ] improve react-navigation goBack function
- [ ] improve integration of FancyDrawer as a single component
- [ ] integrate FancyDrawer to react-navigation CustomNavigators

## Author

André Monteiro [dev-andremonteiro](https://github.com/dev-andremonteiro)

[Follow me on Twitter!](https://twitter.com/DAndremonteiro)
