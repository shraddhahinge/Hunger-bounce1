import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD09TXpP4OSJwAoJtmltutNCWPY7PxQtg0",
  authDomain: "hunger-bounce-286115.firebaseapp.com",
  databaseURL: "https://hunger-bounce-286115.firebaseio.com",
  projectId: "hunger-bounce-286115",
  storageBucket: "hunger-bounce-286115.appspot.com",
  messagingSenderId: "416520062583",
  appId: "1:416520062583:web:c0f834411e653f6db0e872",
  measurementId: "G-FV7ZGPDD0L",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
