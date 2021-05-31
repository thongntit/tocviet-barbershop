import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>My App</h1>
      <p>
        Welcome {firebase.auth().currentUser?.displayName}! You are now
        signed-in!
      </p>
      <div onClick={logOut}>Sign-out</div>
    </div>
  );
};

export default Home;
