export const homeFeed = [
  {
    type: "tweet",

    user: "Rodney Diaz",
    userName: "@rodiaz",
    avatar: require("../assets/avatar/user1.jpg"),

    time: "1h",
    message:
      'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
    comments: 1,
    retweets: 0,
    likes: 2
  },
  {
    type: "retweet",
    from: "Wayne Spencer",

    user: "Tammy Warren",
    userName: "@tammy2",
    avatar: null,

    time: "2h",
    message:
      'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "Some Video" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
    comments: 0,
    retweets: 3,
    likes: 6
  },
  {
    type: "response",
    to: "@ryanflorence",

    user: "Jacqueline Hayes",
    userName: "@jacqyes68",
    avatar: require("../assets/avatar/user2.jpg"),

    time: "1h",
    message:
      "Hard work is all you need if you're a hunter gatherer, but you're not.\n\nYouneed to convince people around you that whatever thing it is that you want to happen is something that they want to happen too.",
    comments: 3,
    retweets: 6,
    likes: 55
  },
  {
    type: "response",
    to: "@esablack58",

    user: "Wyatt Fleming",
    userName: "@attFleming",
    avatar: require("../assets/avatar/user3.jpg"),

    time: "32m",
    message: "How do you learn sales?",
    comments: 0,
    retweets: 0,
    likes: 0
  },
  {
    type: "retweet",
    from: "Earl Baker",

    user: "Craig Griffin",
    userName: "@cgriffin",
    avatar: require("../assets/avatar/user4.jpg"),

    time: "22h",
    message: "I'm jumping on this AMA. Come keep me company.",
    comments: 2,
    retweets: 6,
    likes: 15
  },
  {
    type: "responseTo",

    original: {
      type: null,
      user: "Josephine Gray",
      userName: null,
      avatar: require("../assets/avatar/user5.jpg"),

      time: "3h",
      message:
        "I need 7 more followers to get to 1000. If I get 1000 by end of day I will Venmo @Dandremonteiro $7.",
      comments: 5,
      retweets: 1,
      likes: 1
    },

    user: "Terry Davidson",
    userName: "@davidson",
    avatar: require("../assets/avatar/user6.jpg"),

    time: "1h",
    message: "I want @Dandremonteiro to pay you",
    comments: 1,
    retweets: 0,
    likes: 0
  }
];

export const searchFeed = {
  main: {
    title:
      "See how will be 'Wizards Unite' new phone game inspired on Harry Potter",
    topic: "Games",
    time: "Earlier Today",
    image: require("../assets/wizardsunite.png")
  },
  trends: [
    {
      title: "Worldwide trends"
    },
    {
      title: "Twitter Clone App",
      tweets: "1,3M tweets"
    },
    {
      title: "Zidane",
      tweets: "609k tweets"
    },
    {
      title: "Noick Foles",
      tweets: "21,7k tweets"
    },
    {
      title: "#FlyEaglesFly",
      tweets: "12,3k tweets"
    },
    { title: "Show more" }
  ]
};

export const notificationFeed = {
  all: [
    {
      type: "discover",
      users: [require("../assets/avatar/user1.jpg")],
      title: "*Rodney Diaz* liked the photo of Tammy Warren",
      desc: "I don't have words for this! pic.twitter.com/tw1tt3rcl0n31s4w3s0m3"
    },
    {
      type: "follow",
      users: [require("../assets/avatar/user2.jpg")],
      title: "*Jacqueline Hayes* followed you",
      desc: null
    },
    {
      type: "like",
      users: [
        require("../assets/avatar/user3.jpg"),
        require("../assets/avatar/user1.jpg"),
        require("../assets/avatar/user4.jpg"),
        require("../assets/avatar/user2.jpg")
      ],
      title:
        "*Wyatt Fleming* and other 3 liked a Tweet in wich you were mentioned",
      desc:
        "Congrats for @DAndremonteiro for releasing Twitter Clone app! #ReactNative #Expo"
    },
    {
      type: "discover",
      users: [require("../assets/avatar/user6.jpg")],
      title: "*Terry Davidson* liked the photo of Elon Musk",
      desc: "That's a beautiful app indeed"
    }
  ],
  mentions: [
    {
      type: "tweet",

      user: "Rodney Diaz",
      userName: "@rodiaz",
      avatar: require("../assets/avatar/user1.jpg"),

      time: "05/03/2019",
      message:
        'Sometimes I see english words that make me smile - because they are clear "transpositions" of their latin/italian counterparts',
      comments: 0,
      retweets: 0,
      likes: 3
    },
    {
      type: "retweet",
      from: "Wayne Spencer",

      user: "Tammy Warren",
      userName: "@tammy2",
      avatar: null,

      time: "03/03/2019",
      message:
        'Aqui les dejo el link a mi charla de ayer del #ReactWeekMedelin : "Some Video" youtube.com/watch?v=WC0Wkx #react #redux #RxJS',
      comments: 13,
      retweets: 30,
      likes: 20
    }
  ]
};

export const messageFeed = [
  {
    user: "Rodney Diaz",
    userName: "@rodiaz",
    avatar: require("../assets/avatar/user1.jpg"),

    time: "1m",
    message: "You: Check out my project!"
  },
  {
    user: "Terry Davidson",
    userName: "@davidson",
    avatar: require("../assets/avatar/user6.jpg"),

    time: "2m",
    message: "Realy Nice project man, congrats."
  },
  {
    user: "Craig Griffin",
    userName: "@cgriffin",
    avatar: require("../assets/avatar/user4.jpg"),

    time: "1d",
    message: "Hey, I saw your twitter clone, very nice!"
  },
  {
    user: "Wyatt Fleming",
    userName: "@attFleming",
    avatar: require("../assets/avatar/user3.jpg"),

    time: "3d",
    message: "You: Thank you !"
  }
];
