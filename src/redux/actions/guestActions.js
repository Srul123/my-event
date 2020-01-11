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

    const response = await fetch("/guests");
    const data = await response.json();

    dispatch({
      type: GET_GUESTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response.data
    });
  }
};

// Add new guest
export const addGuest = guest => async dispatch => {
  try {
    setLoading();

    const response = await fetch("/guests", {
      method: "POST",
      body: JSON.stringify(guest),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    dispatch({
      type: ADD_GUEST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response.data
    });
  }
};

// Delete a guest
export const deleteGuest = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/guests/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_GUEST,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response.data
    });
  }
};

// Update  guest on server
export const updateGuest = guest => async dispatch => {
  try {
    setLoading();

    const response = await fetch(`/guests/${guest.id}`, {
      method: "PUT",
      body: JSON.stringify(guest),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    dispatch({
      type: UPDATE_GUEST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GUESTS_ERROR,
      payload: error.response.data
    });
  }
};

// Search guest
export const searchGuests = (text) => async dispatch => {
  try {
    setLoading();

    const response = await fetch(`/guests?q=${text}`);
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
export const setCurrent = (guest) =>  {
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
