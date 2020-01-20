import {combineReducers} from 'redux';
import guestReducer from "../reducers/guestReducer";
import groupReducer from "../reducers/groupReducer";
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  guest: guestReducer,
  group: groupReducer
});