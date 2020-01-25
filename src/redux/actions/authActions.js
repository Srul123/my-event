import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "./types";

import setAuthToken from "../../utils/setAuthToken";

import {baseURL} from './apiURL';


// Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    console.log("localStorage.token: " + localStorage.token);
    
   setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${baseURL}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload:res.data
    });
  }
   catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
  }
};

// Register User
export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`${baseURL}/api/users`, formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (error) {
    console.error("error " + error);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });
  }

};

// Login User
  export const login =  formData => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

// Logout
export const logout = () =>  dispatch => {
  console.log("logout from action");
  
  dispatch({
    type: LOGOUT
  });
};

// Clear Errors
export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
};
