import {
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../constants/authActionTypes";

export const authInitialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
  isAuthenticated: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };

    case SET_PASSWORD:
      return { ...state, password: action.payload };

    case LOGIN_START:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true };

    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
