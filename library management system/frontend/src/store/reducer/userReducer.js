import { USER_LOGIN, USER_LOGOUT, GET_PROFILE } from "../actionTypes";

const initialState = {
  user: null,
  isAdmin: false,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
        isAdmin: action.payload && action.payload.role === "admin",
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        user: null,
        isAdmin: false,
      };
    }
    case GET_PROFILE: {
      return {
        ...state,
        user: action.payload,
        isAdmin: action.payload && action.payload.role === "admin",
      };
    }
    default:
      return state;
  }
}
