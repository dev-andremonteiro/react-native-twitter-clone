import * as Firebase from "firebase";

const config = {
  apiKey: "**********************************",
  authDomain: "***************.firebaseapp.com",
  databaseURL: "https://**************.firebaseio.com",
  projectId: "***************",
  storageBucket: "***************.appspot.com",
  messagingSenderId: "******************"
};
Firebase.initializeApp(config);

export default Firebase;
