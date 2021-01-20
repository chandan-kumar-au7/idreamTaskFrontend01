import actions from "./actions";

const initState = { loginToken: null };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        loginToken: action.loginToken,
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
