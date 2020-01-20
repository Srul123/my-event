import {
 REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../actions/types";


const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: null,
   loading: true,
   user: null,
   error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          groups: action.payload,
          loading: false
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false
        };
      case CLEAR_ERRORS:
        console.error("**Your Error: " + action.payload);
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
};

