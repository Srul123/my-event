import uuid from 'uuid';

import {
    REMOVE_ALERT,
    SET_ALERT
} from "./types";

// Load User
export const setAlert = (msg, type, timeout = 5000) => async dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload:  { msg, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);

};


