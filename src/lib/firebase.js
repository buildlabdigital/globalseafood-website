import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5DPToltl3rRG6QbVJ5yDY1v-ikYbbugs",
  authDomain: "globalseafoodexchange.firebaseapp.com",
  projectId: "globalseafoodexchange",
  storageBucket: "globalseafoodexchange.appspot.com",
  messagingSenderId: "52759377162",
  appId: "1:52759377162:web:9cf3b14f5d036b845676f3",
  measurementId: "G-MG2JTS8JX7",
};

// if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
// }
export const auth = firebase.auth();
export const db = firebase.firestore();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const firestore = firebase.firestore;
