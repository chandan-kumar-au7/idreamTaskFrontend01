import React, { Component } from 'react';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import AlignLeft, { Typography } from './style';
import {
  DateTimePicker,
  DatePicker,
} from '../../../components/uielements/materialUiPicker';
import IconButton from '../../../components/uielements/iconbutton';

export default class extends Component {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleWeekChange = date => {
    this.setState({ selectedDate: date.clone().startOf('week') });
  };

  formatWeekSelectLabel = (date, invalidLabel) =>
    date && date.isValid()
      ? `Week of ${date
          .clone()
          .startOf('week')
          .format('MMM Do')}`
      : invalidLabel;

  renderCustomDayForDateTime = (
    date,
    selectedDate,
    dayInCurrentMonth,
    dayComponent
  ) => {
    const { classes } = this.props;

    const dayClassName = [
      date.isSame(selectedDate, 'day') && classes.customDayHighlight,
    ].join(' ');

    return (
      <div className={classes.dayWrapper}>
        {dayComponent}
        <div className={dayClassName} />
      </div>
    );
  };

  renderWrappedDefaultDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = this.props;

    const startDate = selectedDate
      .clone()
      .day(0)
      .startOf('day');
    const endDate = selectedDate
      .clone()
      .day(6)
      .endOf('day');

    const dayIsBetween =
      date.isSame(startDate) ||
      date.isSame(endDate) ||
      (date.isAfter(startDate) && date.isBefore(endDate));

    const firstDay = date.isSame(startDate, 'day');
    const lastDay = date.isSame(endDate, 'day');

    const wrapperClassName = [
      dayIsBetween ? classes.highlight : null,
      firstDay ? classes.firstHighlight : null,
      lastDay ? classes.endHighlight : null,
    ].join(' ');

    const dayClassName = [
      classes.day,
      !dayInCurrentMonth && classes.nonCurrentMonthDay,
      !dayInCurrentMonth && dayIsBetween && classes.highlightNonCurrentMonthDay,
    ].join(' ');

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {date.format('DD')} </span>
        </IconButton>
      </div>
    );
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Row>
        <HalfColumn>
          <AlignLeft>
            <Typography gutterBottom>Week picker</Typography>

            <DatePicker
              value={selectedDate}
              onChange={this.handleDateChange}
              renderDay={this.renderWrappedDefaultDay}
              labelFunc={this.formatWeekSelectLabel}
            />
          </AlignLeft>
        </HalfColumn>

        <HalfColumn>
          <AlignLeft>
            <Typography gutterBottom>DateTime picker</Typography>

            <DateTimePicker
              value={selectedDate}
              onChange={this.handleDateChange}
              renderDay={this.renderCustomDayForDateTime}
            />
          </AlignLeft>
        </HalfColumn>
      </Row>
    );
  }
}
