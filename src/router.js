import React, { lazy, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import Auth0 from "./helpers/auth0";
import { notification } from "./components";
import dashboardAction from "./redux/dashboard/actions";
import authAction from "./redux/auth/actions";

import { varifyToken } from "./utils/varifyToken";

const { haveToRerender } = dashboardAction;
const { loggedInUserData } = authAction;

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  // console.log(isLoggedIn),
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const PublicRoutes = ({
  history,
  isLoggedIn,
  haveToRerender,
  loggedInUserData,
}) => {
  useEffect(() => {
    (async function () {
      const varified = await varifyToken();
      // console.log("varified ", varified);
      if (
        isLoggedIn === true &&
        varified.data !== "invalid token" &&
        varified.data !== "jwt expired"
      ) {
        haveToRerender(true);
        loggedInUserData(varified.data.data);

        history.push("/dashboard");
      } else {
        // history.push("/");
        notification("error", "You Need To LogIn Again");
      }
    })();
  }, [history, isLoggedIn]);
  return (
    <BrowserRouter>
      <>
        <Route
          exact
          path="/"
          component={lazy(() => import("./containers/Page/signin"))}
        />

        <Route
          path="/auth0loginCallback"
          render={(props) => {
            Auth0.handleAuthentication(props);
          }}
        />

        <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={isLoggedIn}
        />
        <Route
          exact
          path="/404"
          component={lazy(() => import("./containers/Page/404"))}
        />
        <Route
          exact
          path="/505"
          component={lazy(() => import("./containers/Page/505"))}
        />
        <Route
          exact
          path="/signup"
          component={lazy(() => import("./containers/Page/signup"))}
        />
        <Route
          exact
          path="/forgot-password"
          component={lazy(() => import("./containers/Page/forgetpassword"))}
        />
        <Route
          exact
          path="/reset-password"
          component={lazy(() => import("./containers/Page/resetpassword"))}
        />
      </>
    </BrowserRouter>
  );
};

function mapStateToProps(state) {
  // console.log("redux state_src/router.js ----- ", state);
  return {
    isLoggedIn: state.Auth.loginToken !== null,
    Rerendring: state.dashboard.haveToRerender,
  };
}

export default connect(mapStateToProps, { haveToRerender, loggedInUserData })(
  PublicRoutes
);
