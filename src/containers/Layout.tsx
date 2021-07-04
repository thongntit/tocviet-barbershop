import firebase from "firebase/app";
import "firebase/auth";
import React, { Suspense } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import AppHeader from "../components/AppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Home from "./Home";

interface Props {}

const Layout = (props: Props) => {
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
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Layout;
