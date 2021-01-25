import dashboardActions from "./actions";

const initState = {
  haveToRerender: false,
};

export default function boxReducer(state = initState, action) {
  switch (action.type) {
    case dashboardActions.HAVE_TO_RERENDER:
      return {
        ...state,
        haveToRerender: action.payload,
      };
    default:
      return state;
  }
}
