const actions = {
  CALENDAR_VIEW: 'CALENDAR_VIEW',
  CALENDAR_EVENTS: 'CALENDAR_EVENTS',
  CHANGE_SELECTED_DATE: 'CHANGE_SELECTED_DATE',
  ON_SELECT_DATE: 'ON_SELECT_DATE',
  changeView: view => ({
    type: actions.CALENDAR_VIEW,
    view
  }),
  changeEvents: events => ({
    type: actions.CALENDAR_EVENTS,
    events
  }),
  changeSelectedDAte: selectedDate => ({
    type: actions.CHANGE_SELECTED_DATE,
    selectedDate
  }),
  onSelectData: (selectedData, modalVisible) => ({
    type: actions.ON_SELECT_DATE,
    selectedData,
    modalVisible
  })
};
export default actions;
