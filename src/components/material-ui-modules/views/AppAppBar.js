import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, {styles as toolbarStyles} from '../components/Toolbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {useTranslation} from "react-i18next";


const styles = theme => ({
    title: {
        fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
});

function AppAppBar(props) {
    const {t} = useTranslation();
    const {classes} = props;

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
                    <div className={classes.right}>
                        <Link
                            // variant="h6"
                            // underline="none"
                            className={clsx(classes.rightLink, classes.linkSecondary)}
                            to="/sign-in"
                        >
                            {t("navBar.home.sign-up")}
                        </Link>
                        <Link
                            // color="inherit"
                            // variant="h6"
                            // underline="none"
                            className={classes.rightLink}
                            to="/sign-up"
                        >
                            {t("navBar.home.sign-in")}
                        </Link>

                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder}/>
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
