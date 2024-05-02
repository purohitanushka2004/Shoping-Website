// For Firebase JS SDK v7.20.0 and later, measurementId is optionall
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwM1f88vpTc63_nFzCve0FzbvscD-t3_o",
  authDomain: "clone-fa01d.firebaseapp.com",
  projectId: "clone-fa01d",
  storageBucket: "clone-fa01d.appspot.com",
  messagingSenderId: "574564546791",
  appId: "1:574564546791:web:4f9a7cc2ecc9f434990a42",
  measurementId: "G-9SN3F12531",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //database
const auth = firebase.auth(); //authentication

export { db, auth };
