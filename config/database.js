const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCipmZATZg3X2ok44KKTpjRy-_DgJUKQak",
    authDomain: "brians-ostebiks-mickey.firebaseapp.com",
    databaseURL: "https://brians-ostebiks-mickey.firebaseio.com",
    projectId: "brians-ostebiks-mickey",
    storageBucket: "brians-ostebiks-mickey.appspot.com",
    messagingSenderId: "21200162082",
    appId: "1:21200162082:web:c14dbeacca73f93422297b"
  };

  const db = firebase.initializeApp(firebaseConfig);

  module.exports = db;
