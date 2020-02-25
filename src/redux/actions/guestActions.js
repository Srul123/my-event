import axios from "axios";

import {
  ADD_GUEST,
  SET_LOADING,
  GUESTS_ERROR,
  GET_GUESTS,
  DELETE_GUEST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GUEST,
  SEARCH_GUESTS
} from "./types";

import { baseURL } from "./apiURL";
// export const getGuests = () => {
//     return async (dispatch) => {
//         setLoading();

// const res = await fetch('/guests');
// const data = await res.json();

//         dispatch({
//           type: GET_GROUPS,
//           payload: data
//         });

//     };
// }

// Get Guests from server
export const getGuests = () => async dispatch => {
  try {
    setLoading();

    const response = await axios.get(`${baseURL}/api/guests`);
    console.log("response");
    console.log(response);

    const data = response.data;
    console.log(data);

    dispatch({
      type: GET_GUESTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error
    });
  }
};

// Add new guest
export const addGuest = guest => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    setLoading();
    console.log("guest:");
    console.log(guest);
    const response = await axios.post(`${baseURL}/api/guests`, guest, config);
    console.log("response from add user");
    console.log(response);
    const data = response.data;

    dispatch({
      type: ADD_GUEST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response
    });
  }
};

// Delete a guest
export const deleteGuest = id => async dispatch => {
  try {
    setLoading();

    await axios.delete(`${baseURL}/api/guests/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_GUEST,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response
    });
  }
};

// Update  guest on server
export const updateGuest = guest => async dispatch => {
    console.log("guest edit");
    console.log(guest);
    
  try {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await axios.put(
      `${baseURL}/api/guests/${guest.id}`,
      guest,
      config
    );

    const data =  response.data;

    dispatch({
      type: UPDATE_GUEST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response
    });
  }
};

// Search guest
export const searchGuests = text => async dispatch => {
  try {
    setLoading();

    const response = await fetch(`/api/guests?q=${text}`);
    const data = await response.json();

    dispatch({
      type: SEARCH_GUESTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response.data
    });
  }
};

// Set current guest
export const setCurrent = guest => {
  return {
    type: SET_CURRENT,
    payload: guest
  };
};

// Clear current guest
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
