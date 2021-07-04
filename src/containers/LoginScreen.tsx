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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/customer");
      setIsSignedIn(false);
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
