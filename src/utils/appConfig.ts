import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDZY1UYlg5BArDDvHBX5R6tIMcnikbLkVE",
  authDomain: "barber-tocviet.firebaseapp.com",
  projectId: "barber-tocviet",
  storageBucket: "barber-tocviet.appspot.com",
  messagingSenderId: "439896035756",
  appId: "1:439896035756:web:a0726d0c7009c8f498aa09",
  measurementId: "G-52ZWC3LRYJ",
};

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  // signInSuccessUrl: "/home",
};
