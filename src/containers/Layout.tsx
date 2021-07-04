import CircularProgress from "@material-ui/core/CircularProgress";
import AppHeader from "components/AppBar";
import AppBottomNavigator from "components/AppBottomNavigator";
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";

interface Props {}
const Customer = React.lazy(() => import("containers/Customer"));

const Layout = (props: Props) => {
  return (
    <>
      <AppHeader />
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/staff" component={Home} />
          <Route exact path="/account" component={Home} />
          <Redirect to="customer" />
        </Switch>
      </Suspense>
      <AppBottomNavigator />
    </>
  );
};

export default Layout;
