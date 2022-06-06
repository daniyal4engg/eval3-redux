import axios from "axios";
import redux from "redux";
import { LOADING, fetchLoading } from "./action";
import { SUCCESS, fetchUsersSuccess } from "./action";
import { FAILURE, fetchUsersFailure } from "./action";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// https://reqres.in/api/login

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchLoading());
    axios
      .get("https://reqres.in/api/login")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// create reduc store
