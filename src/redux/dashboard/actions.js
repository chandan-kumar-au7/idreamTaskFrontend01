const dashboardActions = {
  HAVE_TO_RERENDER: "HAVE_TO_RERENDER",
  haveToRerender: (payload) => ({
    type: dashboardActions.HAVE_TO_RERENDER,
    payload,
  }),
};
export default dashboardActions;
