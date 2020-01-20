import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MyListGuests from "./components/pages/MyListGuests";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import ForgotPassword from "./components/pages/ForgotPassword";

import { Provider } from "react-redux";
import store from "./redux/store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import Navbar from "./components/layout/Navbar";
import AppAppBar from "./components/material-ui-modules/views/AppAppBar";

const App = props => {
  const { match } = props;

  useEffect(() => {

    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <AppAppBar />
          <Switch>
            <Route path={"/my-list"} exact component={MyListGuests} />
            <Route path={"/sign-in"} exact component={SignIn} />
            <Route path={"/sign-up"} component={SignUp} />
            <Route path={"/forgot-password"} exact component={ForgotPassword} />
            <Route path={"/"} exact component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
