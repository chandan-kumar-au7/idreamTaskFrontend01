import React, { Fragment, Component } from 'react';
import moment from 'moment';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import AlignLeft, { Typography } from './style';
import {
  TimePicker,
  DatePicker,
} from '../../../components/uielements/materialUiPicker';

export default class extends Component {
  state = {
    selectedDate: moment(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;
    return (
      <Fragment>
        <Row>
          <HalfColumn>
            <AlignLeft>
              <Typography gutterBottom>Date picker</Typography>
              <DatePicker
                value={selectedDate}
                onChange={this.handleDateChange}
                animateYearScrolling={false}
              />
            </AlignLeft>
          </HalfColumn>

          <HalfColumn className="picker">
            <AlignLeft>
              <Typography gutterBottom>Time picker</Typography>

              <TimePicker
                value={selectedDate}
                onChange={this.handleDateChange}
              />
            </AlignLeft>
          </HalfColumn>
        </Row>
      </Fragment>
    );
  }
}
