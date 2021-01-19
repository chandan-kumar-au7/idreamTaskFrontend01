import React from 'react';
import HelperText from '../../components/utility/helper-text/';
import Scrollbars from '../../components/utility/customScrollBar';
import {
  MobileEventPlace,
  AddButton,
  CancelButton,
  Icon,
} from './calendar.style';

export default ({ selectedDate, events, onSelectData, changeSelectedDAte }) => {
  const newEvent = {
    title: '',
    desc: '',
    start: selectedDate,
    end: selectedDate,
  };
  return (
    <MobileEventPlace>
      <Scrollbars className="eventsList">
        <div>
          {events.length === 0 ? <HelperText text="No event" /> : ''}
          {events.map((event, index) => (
            <p
              className="eventItem"
              key={index}
              onClick={() => onSelectData(event, 'update')}
            >
              {event.title}
            </p>
          ))}
        </div>
      </Scrollbars>
      <CancelButton color="secondary" onClick={() => changeSelectedDAte()}>
        Cancel
      </CancelButton>
      <AddButton color="primary" onClick={() => onSelectData(newEvent, 'new')}>
        <Icon>add</Icon>
      </AddButton>
    </MobileEventPlace>
  );
};
