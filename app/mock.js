export const twitterMessages = [
  {
    type: "tweet",

    user: "Kelvin Set",
    userName: "@Kelset",
    avatar: require("../assets/avatar/user1.jpg"),

    time: "1h",
    message:
      'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
    responses: 1,
    retweets: 0,
    likes: 2
  },
  {
    type: "retweet",
    from: "Alejandro Nanez",

    user: "elyalvarado",
    userName: "@elyalvarado",
    avatar: null,

    time: "2h",
    message:
      'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "redux-observable: Side-Effects en Redux con RxJS" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
    responses: 0,
    retweets: 3,
    likes: 6
  },
  {
    type: "response",
    to: "@ryanflorence",

    user: "Ryan Florence",
    userName: "@ryanflorence",
    avatar: require("../assets/avatar/user2.jpg"),

    time: "1h",
    message:
      "Hard work is all you need if you're a hunter gatherer, but you're not.\n\nYouneed to convince people around you that whatever thing it is that you want to happen is something that they want to happen too.",
    responses: 3,
    retweets: 6,
    likes: 55
  },
  {
    type: "response",
    to: "@ryanflorence",

    user: "Adrian Carolli",
    userName: "@icookandcode",
    avatar: require("../assets/avatar/user3.jpg"),

    time: "32m",
    message: "How do you lear sales?",
    responses: 0,
    retweets: 0,
    likes: 0
  },
  {
    type: "retweet",
    from: "Brian Holt",

    user: "Burke Holland",
    userName: "@burkeholland",
    avatar: require("../assets/avatar/user4.jpg"),

    time: "22h",
    message: "I'm jumping on this AMA. Come keep me company.",
    responses: 2,
    retweets: 6,
    likes: 15
  },
  {
    type: "responseTo",

    main: {
      user: "Matthew Gerstman (Slytherin)",
      userName: null,
      avatar: require("../assets/avatar/user5.jpg"),

      time: "3h",
      message:
        "I need 7 more followers to get to 1000. If I get 1000 by end of day I will Venmo @hswolf $7.",
      responses: 5,
      retweets: 1,
      likes: 1
    },

    user: "Brian Holt",
    userName: "@holbt",
    avatar: require("../assets/avatar/user6.jpg"),

    time: "1h",
    message: "I want @hswolff to pay you",
    responses: 1,
    retweets: 0,
    likes: 0
  }
];
