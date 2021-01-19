import clone from "clone";
import actions from "./actions";
import events from "../../containers/Calendar/demoEvents";

export const dateToString = date =>
  date
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
const filterEvents = events => {
  const mobileEvents = [];
  const mobileDailyEvents = {};
  events.forEach(event => {
    const newStartString = dateToString(event.start);
    if (!mobileDailyEvents[newStartString]) {
      mobileDailyEvents[newStartString] = [];
      mobileEvents.push({
        allDay: true,
        title: "",
        modalVisible: false,
        selectedData: undefined,
        selectedDate: null,
        start: new Date(newStartString),
        end: new Date(newStartString)
      });
    }
    mobileDailyEvents[newStartString].push(event);
  });
  return { mobileEvents, mobileDailyEvents };
};
const initState = {
  view: "month",
  events,
  ...filterEvents(clone(events))
};

export default function(state = initState, action) {
  switch (action.type) {
    case actions.CALENDAR_VIEW:
      return {
        ...state,
        view: action.view
      };
    case actions.CALENDAR_EVENTS: {
      const events = action.events;
      const { mobileEvents, mobileDailyEvents } = filterEvents(clone(events));
      return {
        ...state,
        events,
        mobileEvents,
        mobileDailyEvents
      };
    }

    case actions.CHANGE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.selectedDate
      };
    case actions.ON_SELECT_DATE:
      return {
        ...state,
        selectedData: action.selectedData,
        modalVisible: action.modalVisible
      };
    default:
      return state;
  }
}
