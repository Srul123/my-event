import {combineReducers} from 'redux';
import guestReducer from "../reducers/guestReducer";
import groupReducer from "../reducers/groupReducer";

export default combineReducers({
  guest: guestReducer,
  group: groupReducer
});