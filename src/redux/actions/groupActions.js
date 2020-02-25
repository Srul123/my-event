import axios from 'axios';

import {
    GET_GROUPS,
    ADD_GROUP,
    DELETE_GROUP,
    UPDATE_GROUP,
    SET_LOADING,
    GROUPS_ERROR,
    SET_CURRENT_GROUP,
    CLEAR_CURRENT_GROUP,
    FILTER_GROUP,
  CLEAR_FILTER
} from "./types";

import {baseURL} from  "./apiURL";


export const getGroups = () => async dispatch => {

    try {
        setLoading();
        const response = await axios.get(`${baseURL}/api/groups`);
        const data =  response.data;
        console.log("getGroups");

        dispatch({
            type: GET_GROUPS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GROUPS_ERROR,
            payload: error
        });
    }
};

// Add new group
export const addGroup = group => async dispatch => {
    console.log("group from action");
    console.log(group);

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        setLoading();

        const response = await axios.post(`${baseURL}/api/groups`, group, config);
        const data =  response.data;

        dispatch({
            type: ADD_GROUP,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GROUPS_ERROR,
            payload: error.response
        });
    }
};

// Delete a group
export const deleteGroup = id => async dispatch => {
    try {
        setLoading();

        await axios.delete(`${baseURL}/api/groups/${id}`);

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

        const response = await fetch(`${baseURL}/api/groups/${group.id}`, {
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


// Set current group
export const setCurrent = group => {
    return {
        type: SET_CURRENT_GROUP,
        payload: group
    };
};

// Clear current group
export const clearCurrent = () => async dispatch => {
    return {
        type: CLEAR_CURRENT_GROUP
    };
};

// Filter groups
export const filterGroups = (text) => async dispatch => {
    dispatch({
        type: FILTER_GROUP,
        payload: text
    });
    // return {
    //     type: FILTER_GROUP,
    //     payload: text
    // };
};

// Clear Filter groups
export const clearFilter = () => async dispatch => {
  return {
    type: CLEAR_FILTER
  };
};

