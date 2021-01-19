import React, { Component } from "react";
import { connect } from "react-redux";
import clone from "clone";
import ModalEvents from "./modalEvents";
import EventsView from "./mobileEventsView";
import calendarActions from "../../redux/calendar/actions";
import { dateToString } from "../../redux/calendar/reducer";
import { CalendarStyleWrapper, Prev, Next } from "./calendar.style";
import DnDCalendar from "./DnDCalendar";
const {
  changeView,
  changeEvents,
  changeSelectedDAte,
  onSelectData
} = calendarActions;

const getIndex = (events, selectedEvent) =>
  events.findIndex(event => event.id === selectedEvent.id);
class FullCalender extends Component {
  onSelectEvent = selectedData => {
    this.props.changeSelectedDAte(dateToString(selectedData.start));
  };
  setModalData = (type, selectedData) => {
    const { modalVisible, changeEvents, onSelectData } = this.props;
    const events = clone(this.props.events);
    if (type === "cancel") {
      onSelectData(undefined, false);
    } else if (type === "delete") {
      const index = getIndex(events, selectedData);
      if (index > -1) {
        events.splice(index, 1);
      }
      changeEvents(events);
      onSelectData(undefined, false);
    } else if (type === "updateValue") {
      onSelectData(selectedData, modalVisible);
    } else {
      if (modalVisible === "new") {
        events.push(selectedData);
      } else {
        const index = getIndex(events, selectedData);
        if (index > -1) {
          events[index] = selectedData;
        }
      }
      changeEvents(events);
      onSelectData(undefined, false);
    }
  };

  render() {
    const {
      modalVisible,
      selectedData,
      mobileEvents,
      mobileDailyEvents,
      selectedDate,
      changeSelectedDAte,
      onSelectData,
      height
    } = this.props;
    const selectedEvents = mobileDailyEvents[selectedDate] || [];
    const EmptyDiv = <div />;
    const calendarOptions = {
      events: mobileEvents,
      selectedData,
      view: "month",
      onView: () => {},
      messages: {
        week: EmptyDiv,
        day: EmptyDiv,
        month: EmptyDiv,
        agenda: EmptyDiv,
        previous: <Prev>keyboard_arrow_left</Prev>,
        next: <Next>keyboard_arrow_right</Next>
      },
      views: ["month"],
      onSelectSlot: this.onSelectEvent,
      onSelectEvent: this.onSelectEvent,
      onEventDrop: () => {}
    };

    return (
      <CalendarStyleWrapper className="calendarWrapper">
        <ModalEvents
          modalVisible={modalVisible}
          selectedData={clone(selectedData)}
          setModalData={this.setModalData}
        />
        <DnDCalendar {...calendarOptions} style={{ height: height - 65 }} />
        {selectedDate ? (
          <EventsView
            events={selectedEvents}
            selectedDate={new Date(selectedDate)}
            onSelectData={onSelectData}
            changeSelectedDAte={changeSelectedDAte}
          />
        ) : (
          ""
        )}
      </CalendarStyleWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.Calendar,
    height: state.App.height
  };
}
export default connect(mapStateToProps, {
  changeView,
  changeEvents,
  changeSelectedDAte,
  onSelectData
})(FullCalender);
