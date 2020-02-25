import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";


const PrivateRoute = ({auth, component: Component, ...rest}) => {
    const {loading, isAuthenticated} = auth;
    console.log("isAuthenticated ");
    console.log(auth);
    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated && !loading ? (
                    <Redirect to="/login"/>
                ) : (
                    <Component  {...props} />
                )
            }
        />
    )
};


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(
    PrivateRoute
);