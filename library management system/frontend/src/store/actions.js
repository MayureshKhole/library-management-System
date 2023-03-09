import { BackendApi } from "../client/backend-api";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { GET_PROFILE, USER_LOGIN, USER_LOGOUT } from "./actionTypes";

export const loginUser = (username, password) => async (dispatch) => {
  console.log("loginuser");
  //   const { user, error } = await BackendApi.user.login(username, password);
  // if (error) {
  //   NotificationManager.error(error);
  // } else {
  //   NotificationManager.success("Logged in successfully");
  //   setUser(user);
  // }

  try {
    const { user, error } = await BackendApi.user.login(username, password);
    if (error) {
      NotificationManager.error(error);
    } else {
      NotificationManager.success("Logged in successfully");
      //   setUser(user);
      dispatch({
        type: USER_LOGIN,
        payload: user,
      });
    }
  } catch (error) {
    NotificationManager.error(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  //   setUser(null);
  //   await BackendApi.user.logout();
  try {
    await BackendApi.user.logout();
    dispatch({
      type: USER_LOGOUT,
      payload: null,
    });
  } catch (error) {
    NotificationManager.error(error);
  }
};

export function getProfile(obj = {}) {
  // console.log("middleware test");
  return (dispatch) => {
    // console.log("getProfile");
    BackendApi.user
      .getProfile()
      .then(({ user, error }) => {
        if (error) {
          console.error(error);
        } else {
          //
          dispatch({ type: GET_PROFILE, payload: user });
        }
      })
      .catch(console.error);
  };
}
