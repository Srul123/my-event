
import React from 'react';
import {setAlert} from '../../redux/actions/alertActions';
import {connect} from "react-redux";
import withRoot from "../material-ui-modules/withRoot";

const Alerts = ({alert}) => {

    return (
        alert.length > 0 &&
        alert.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle' /> {alert.msg}
            </div>
        ))
    );
};

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(mapStateToProps, {setAlert})(withRoot(Alerts));
