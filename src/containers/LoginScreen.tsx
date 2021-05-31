import firebase from "firebase/app";
import "firebase/auth";
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory } from "react-router-dom";
import baberLogo from "../static/baber.jpeg";
import { uiConfig } from "../utils/appConfig";
import "./LoginScreen.scss";

interface Props {}

const LoginScreen = (props: Props) => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const history = useHistory();

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/home");
    }
  }, [history, isSignedIn]);

  return (
    <div className="login-screen__container">
      <img className="login-screen__logo" src={baberLogo} alt="BarberLogo" />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default LoginScreen;
