import { GET_GROUPS, ADD_GROUP, DELETE_GROUP, GROUPS_ERROR, SET_LOADING } from "../actions/types";


const intialState = {
  groups: null,
  loading: false,
  error: null
};

export default (state = intialState, action) => {
    switch (action.type) {
      case GET_GROUPS:
        return {
          ...state,
          groups: action.payload,
          loading: false
        };
      case ADD_GROUP:
        return {
          ...state,
          groups: [...state.groups, action.payload],
          loading: false
        };
      case DELETE_GROUP:
        return {
          ...state,
          groups: state.groups.filter(group => group.id !== action.payload),
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
    }
};

