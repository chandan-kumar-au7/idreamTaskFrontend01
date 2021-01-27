import actions from "./actions";

const initState = { loginToken: null, loggedInUserData: {} };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        loginToken: action.payload,
      };
    case actions.LOGGEDIN_USER_DATA:
      return {
        loggedInUserData: action.payload,
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
