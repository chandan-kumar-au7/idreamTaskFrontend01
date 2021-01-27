const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGGEDIN_USER_DATA: "LOGGEDIN_USER_DATA",
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: (payload) => ({
    type: actions.LOGIN_REQUEST,
    payload,
  }),
  loggedInUserData: (payload) => ({
    type: actions.LOGGEDIN_USER_DATA,
    payload,
  }),
  logout: () => ({
    type: actions.LOGOUT,
  }),
};
export default actions;
