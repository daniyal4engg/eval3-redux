// const LOADING = "LOADING";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchLoading = () => {
  return {
    type: LOADING,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  };
};
