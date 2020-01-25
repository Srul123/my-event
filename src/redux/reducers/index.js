import {combineReducers} from 'redux';
import guestReducer from "../reducers/guestReducer";
import groupReducer from "../reducers/groupReducer";
import authReducer from './authReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  guest: guestReducer,
  group: groupReducer
});