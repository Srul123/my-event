import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MyListGuests from "./pages/MyListGuests/MyListGuests";


import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";


const App = () => {



  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/my-list" component={MyListGuests} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
