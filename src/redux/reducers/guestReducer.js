import {
  GET_GROUPS,
  ADD_GUEST,
  SET_LOADING,
  GUESTS_ERROR,
  GET_GUESTS,
  DELETE_GUEST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GUEST,
  SEARCH_GUESTS
} from "../actions/types";

const intialState = {
  guests: null,
  current: null,
  loading: false,
  error: null
};

const guestReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_GUESTS:
      return {
        ...state,
        guests: action.payload,
        loading: false
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, action.payload],
        loading: false
      };
    case DELETE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => guest.id !== action.payload),
        loading: false
      };
    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map(guest =>
          guest.id === action.payload.id ? action.payload : guest
        )
      };
    case SEARCH_GUESTS:
      return {
        ...state,
      guests: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GUESTS_ERROR:
      console.error("**Your Error: " + action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default guestReducer;
