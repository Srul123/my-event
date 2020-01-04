import React, {useEffect, Fragment } from 'react'
import { useTranslation } from "react-i18next";

import M from "materialize-css/dist/js/materialize.min.js";
export default function Navbar() {
    const { t, i18n } = useTranslation();


    useEffect(() => {
      // Init Materialize JS
      M.AutoInit();
    });

      const handleClick = lang => {
        i18n.changeLanguage(lang);
        if (lang === "en") {
          document.body.dir = "ltr";
        } else {
          document.body.dir = "rtl";
        }
      };

    return (
      <Fragment>
        <ul
          id="dropdown1"
          className="dropdown-content"
          style={{ padding: "0" }}
        >
          <li>
            <a onClick={() => handleClick("he")}>עברית</a>
          </li>
          <li>
            <a onClick={() => handleClick("en")}>English</a>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">
              My-Event
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="#">{t("navBar.myGuestList")}</a>
              </li>
              <li>
                <a href="#">{t("navBar.myRSVPList")}</a>
              </li>
              <li>
                <a href="#">{t("navBar.mySeatingList")}</a>
              </li>
              <li>
                <a className="dropdown-trigger" data-target="dropdown1">
                  {t("navBar.lang")}
                  <i className="material-icons dp48 right">language</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
}
