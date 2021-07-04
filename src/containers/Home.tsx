import firebase from "firebase/app";
import "firebase/auth";
import React from "react";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <p>
        Welcome {firebase.auth().currentUser?.displayName}! You are now
        signed-in!
      </p>
    </>
  );
};

export default Home;
