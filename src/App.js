import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import MyListGuests from "./pages/MyListGuests";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";


const App = () => {



  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="container">
          <MyListGuests />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
