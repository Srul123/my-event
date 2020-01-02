import {
  GET_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
  SET_LOADING,
  GROUPS_ERROR
} from "./types";

export const getGroups = () => async dispatch => {
  try {
    setLoading();
    const response = await fetch("/groups");
    const data = await response.json();

    dispatch({
      type: GET_GROUPS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GROUPS_ERROR,
      payload: error.response.data
    });
  }
};

// Add new group
export const addGroup = group => async dispatch => {
  try {
    setLoading();

    const response = await fetch("/groups", {
      method: "POST",
      body: JSON.stringify(group),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    dispatch({
      type: ADD_GROUP,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GROUPS_ERROR,
      payload: error.response.data
    });
  }
};

// Delete a group
export const deleteGroup = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/groups/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_GROUP,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: DELETE_GROUP,
      payload: error.response.data
    });
  }
};

// Update  guest on server
export const updateGroup = group => async dispatch => {
  try {
    setLoading();

    const response = await fetch(`/groups/${group.id}`, {
      method: "PUT",
      body: JSON.stringify(group),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    dispatch({
      type: UPDATE_GROUP,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GROUPS_ERROR,
      payload: error.response.data
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// // Search guest
// export const searchGuests = text => async dispatch => {
//   try {
//     setLoading();

//     const response = await fetch(`/guests?q=${text}`);
//     const data = await response.json();

//     dispatch({
//       type: SEARCH_GUESTS,
//       payload: data
//     });
//   } catch (error) {
//     dispatch({
//       type: GUESTS_ERROR,
//       payload: error.response.data
//     });
//   }
// };

// // Set current guest
// export const setCurrent = guest => {
//   return {
//     type: SET_CURRENT,
//     payload: guest
//   };
// };

// // Clear current guest
// export const clearCurrent = () => async dispatch => {
//   return {
//     type: CLEAR_CURRENT
//   };
// };
