import React from "react";
import firebase from "firebase/app";

interface FirebaseContextProps {
  currentUser?: firebase.User;
}

const FirebaseContext = React.createContext<FirebaseContextProps>({});

export { FirebaseContext };
