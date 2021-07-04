import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useAuth } from "hooks/useAuth";
import AppHeader from "./AppBar";
import AppBottomNavigator from "./AppBottomNavigator";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          <>
            <AppHeader />
            {children}
            <AppBottomNavigator />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
