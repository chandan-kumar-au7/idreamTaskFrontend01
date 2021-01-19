import React, { Component } from 'react';
import clone from 'clone';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import Typography from '../../../components/uielements/typography/index.js';

import {
  TimePicker,
  DateTimePicker,
  DatePicker,
} from '../../../components/uielements/materialUiPicker';
import jalaliUtils from 'material-ui-pickers-jalali-utils';

export default class BasicUsage extends Component {
  constructor(props) {
    super(props);
    this.jMoment = clone(jMoment);
    this.jMoment.loadPersian({
      dialect: 'persian-modern',
      usePersianDigits: true,
    });
  }
  state = {
    selectedDate: moment(),
  };

  handleDateChange = selectedDate => {
    this.setState({ selectedDate });
  };

  render() {
    const selectedDate = clone(
      this.jMoment(this.state.selectedDate).format('jYYYY/jMM/jDD')
    );

    return (
      <div>
        <div className="picker">
          <Typography variant="h5" align="center" gutterBottom>
            Date picker
          </Typography>

          <DatePicker
            okLabel="تأیید"
            cancelLabel="لغو"
            labelFunc={date =>
              clone(this.jMoment(date).format('jYYYY/jMM/jDD'))
            }
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
            utils={jalaliUtils}
          />
        </div>

        <div className="picker">
          <Typography variant="h5" align="center" gutterBottom>
            Time picker
          </Typography>

          <TimePicker
            okLabel="تأیید"
            cancelLabel="لغو"
            labelFunc={date => this.jMoment(date).format('hh:mm A')}
            value={selectedDate}
            onChange={this.handleDateChange}
            utils={jalaliUtils}
          />
        </div>

        <div className="picker">
          <Typography variant="h5" align="center" gutterBottom>
            DateTime picker
          </Typography>

          <DateTimePicker
            okLabel="تأیید"
            cancelLabel="لغو"
            labelFunc={date =>
              this.jMoment(date).format('jYYYY/jMM/jDD hh:mm A')
            }
            value={selectedDate}
            onChange={this.handleDateChange}
            utils={jalaliUtils}
          />
        </div>
      </div>
    );
  }
}
