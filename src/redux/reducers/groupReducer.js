import {
    GET_GROUPS,
    ADD_GROUP,
    DELETE_GROUP,
    GROUPS_ERROR,
    SET_LOADING,
    SET_CURRENT_GROUP,
    CLEAR_CURRENT_GROUP,
    FILTER_GROUP,
    CLEAR_FILTER
} from "../actions/types";


const intialState = {
    groups: null,
    current: null,
    filtered: [],
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
        case SET_CURRENT_GROUP:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT_GROUP:
            return {
                ...state,
                current: null
            };
        case FILTER_GROUP:
            const filtering = (text, groups) => {
                return  groups.filter(group => {
                    const regExp = new RegExp(`${action.payload}`, 'gi');
                    return group.name.match(regExp);
                });
            };
            return {
                ...state,
                filtered: filtering(action.payload, state.groups)
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case SET_LOADING:
            return {
                ...state,
                loading: false
            };
        case GROUPS_ERROR:
            console.error("**Your Error123: " + action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

