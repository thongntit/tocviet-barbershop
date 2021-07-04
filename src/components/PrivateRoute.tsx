import { FirebaseContext } from "contexts";
import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
const PrivateRoute = (props: RouteProps) => {
  const { currentUser } = firebase.auth();
  const history = useHistory();

  if (!currentUser) {
    history.push("/");
  }

  return (
    <FirebaseContext.Provider
      value={{
        currentUser: currentUser || undefined,
      }}
    >
      <Route {...props} />
    </FirebaseContext.Provider>
  );
};

export default PrivateRoute;
