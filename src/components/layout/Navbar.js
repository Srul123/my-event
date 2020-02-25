import React, {useEffect, Fragment} from 'react'
import {useTranslation} from "react-i18next";

import M from "materialize-css/dist/js/materialize.min.js";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/actions/authActions";
import Toolbar from "../material-ui-modules/components/Toolbar";

function Navbar({auth,logout}) {
    const {t, i18n} = useTranslation();
    const {isAuthenticated, user} = auth;


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

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <React.Fragment>
            <li>
                {/*<span>Helo {user && user.name}</span>*/}
                <a onClick={onLogout}>
                    <span className="hide-sm">Logout</span>
                </a>
                {/*{user && user.name}*/}
            </li>
            <li>
                {/*<span>Helo {user && user.name}</span>*/}
                <Link to="my-list">
                    <span className="hide-sm"> רשימת המוזמנים שלי </span>
                </Link>
                {/*{user && user.name}*/}
            </li>
        </React.Fragment>
    );

    const guestLinks = (
        <React.Fragment>
            <li>
                <Link to="/login"> {t("navBar.home.sign-up")}</Link>
            </li>
            <li>
                <Link to="/register"> {t("navBar.home.sign-in")}</Link>
            </li>
        </React.Fragment>
    );

    return (
        <Fragment>
            <ul
                id="dropdown1"
                className="dropdown-content"
                style={{padding: "0"}}
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
                    <Link to="/" className="brand-logo right">
                        My-Event
                    </Link>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        {isAuthenticated ? authLinks : guestLinks}
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


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, {logout})(
    Navbar
);