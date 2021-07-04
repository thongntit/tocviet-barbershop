import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { useHistory } from "react-router-dom";
import AppHeader from "../components/AppBar";
interface Props {}

const Home = (props: Props) => {
  const history = useHistory();

  const { currentUser, signOut } = firebase.auth();

  if (!currentUser) {
    history.push("/");
  }
  const logOut = () => {
    signOut().then(() => history.push("/"));
  };

  return (
    <>
      <AppHeader userInfo={currentUser} logOut={logOut} />
      <p>
        Welcome {firebase.auth().currentUser?.displayName}! You are now
        signed-in!
      </p>
    </>
  );
};

export default Home;
