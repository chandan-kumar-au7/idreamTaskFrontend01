import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const localizer = momentLocalizer(moment);

// const Calendar = withDragAndDrop(BigCalendar);

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

class FullCalender extends Component {
  render() {
    const calendarOptions = {
      localizer: localizer,
      popup: true,
      selectable: true,
      step: 60,
      timeslots: 2,
      className: 'mateCalendar',
      startAccessor: 'start',
      endAccessor: 'end',
      agenda: {
        event: EventAgenda,
      },
    };
    return <Calendar {...calendarOptions} {...this.props} />;
  }
}
// const CalendarExample = DragDropContext(FullCalender);
export default FullCalender;
export { Calendar };
