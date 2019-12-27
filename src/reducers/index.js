import {combineReducers} from 'redux';
import guestReducer from "../reducers/guestReducer";

export default combineReducers({
    guest: guestReducer
 });