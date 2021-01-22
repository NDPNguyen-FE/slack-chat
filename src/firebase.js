import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDfG8IE9gMDjUtmwhgkUbkZYLvmXXkHC5U",
  authDomain: "react-slack-clone-7ec69.firebaseapp.com",
  projectId: "react-slack-clone-7ec69",
  storageBucket: "react-slack-clone-7ec69.appspot.com",
  messagingSenderId: "537671833136",
  appId: "1:537671833136:web:5eb0c6a3bff261efcdfff5",
  databaseURL: "https://react-slack-clone-7ec69-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;