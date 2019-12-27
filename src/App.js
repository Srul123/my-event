import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import ListContainer from "./components/list_guests/ListContainer";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="container">
          <ListContainer />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
