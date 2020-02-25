import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
// import Link from '@material-ui/core/Link';
import AppBar from "../components/AppBar";
import Toolbar, {styles as toolbarStyles} from "../components/Toolbar";
import {logout} from "../../../redux/actions/authActions";

import {useTranslation} from "react-i18next";

const styles = theme => ({
    title: {
        fontSize: 24
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: "space-between"
    },
    left: {
        flex: 1
    },
    leftLinkActive: {
        color: theme.palette.common.white
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end"
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3)
    },
    linkSecondary: {
        color: theme.palette.secondary.main
    }
});

function AppAppBar({classes, auth, logout}) {
    const {t} = useTranslation();
    // const {classes} = props;

    const {isAuthenticated, user} = auth;

    const onLogout = () => {
        console.log("onLogout" + logout);
        logout();
    };

    const authLinks = (
        <React.Fragment>
            <div className={classes.right}>
                <span className={classes.right}>Helo {user && user.name}</span>
                <a href="#!" onClick={onLogout}>
                    <i className="fas fa-sign-out-alt"/>{" "}
                    <span className="hide-sm">Logout</span>
                </a>
            </div>
        </React.Fragment>
    );

    const guestLinks = (
        <div className={classes.right}>
            <Link
                className={clsx(classes.rightLink, classes.linkSecondary)}
                to="/login"
            >
                {t("navBar.home.sign-up")}
            </Link>
            <Link className={classes.rightLink} to="/register">
                {t("navBar.home.sign-in")}
            </Link>
        </div>
    );

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}/>
                    <Link
                        // variant="h6"
                        // underline="none"
                        // color="inherit"
                        className={classes.title}
                        to="/"
                    >
                        {"My-Event"}
                    </Link>
                    {isAuthenticated ? authLinks : guestLinks}
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder}/>
        </div>
    );
};

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(
    withStyles(styles)(AppAppBar)
);
