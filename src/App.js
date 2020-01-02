import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import MyListGuests from "./pages/MyListGuests";

import { Provider } from "react-redux";
import store from "./redux/store";

import { useTranslation } from "react-i18next";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="container">
          <MyListGuests />
        </div>
        {/* <nav>
          <button onClick={() => handleClick("he")}>עברית</button>
          <button onClick={() => handleClick("en")}>English</button>
        </nav>
        <header className="App-header">
          <p>{t("thanks.1")}</p>
          <p>{t("why.1")}</p>
        </header> */}
      </Fragment>
    </Provider>
  );
};

export default App;
