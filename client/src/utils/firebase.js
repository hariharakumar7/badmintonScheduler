// Import the functions you need from the SDKs you need
// import firebase from "./firebase";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT6W9GmL9mxfCyZtdUOqAs1w_JK2kKYtg",
  authDomain: "badminton-planner-d27cd.firebaseapp.com",
  projectId: "badminton-planner-d27cd",
  storageBucket: "badminton-planner-d27cd.appspot.com",
  messagingSenderId: "1072069709363",
  appId: "1:1072069709363:web:476a2b66524f8d86c09d46",
  measurementId: "G-LFD8MK6NVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// export default firebase;
