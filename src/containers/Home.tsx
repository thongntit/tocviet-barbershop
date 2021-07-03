import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { useHistory } from "react-router-dom";
import AppHeader from "../components/AppBar";
interface Props {}

const Home = (props: Props) => {
  const history = useHistory();

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.push("/"));
  };

  if (!firebase.auth().currentUser) {
    history.push("/");
  }

  return (
    <>
      <AppHeader />
      <p>
        Welcome {firebase.auth().currentUser?.displayName}! You are now
        signed-in!
      </p>
    </>
  );
};

export default Home;
