import React, { Component } from 'react';
import { DateTimePicker } from '../../../components/uielements/materialUiPicker';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import AlignLeft, { Typography } from './style';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '../../../components/uielements/iconbutton';
export default class BasicUsage extends Component {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Row>
        <HalfColumn>
          <AlignLeft>
            <Typography gutterBottom>Default</Typography>

            <DateTimePicker
              value={selectedDate}
              onChange={this.handleDateChange}
              leftArrowIcon={<Icon> keyboard_arrow_left </Icon>}
              rightArrowIcon={<Icon> keyboard_arrow_right </Icon>}
            />
          </AlignLeft>
        </HalfColumn>

        <HalfColumn>
          <AlignLeft>
            <Typography style={{ marginBottom: 0 }}>Custom</Typography>

            <DateTimePicker
              error
              autoOk
              ampm={false}
              showTabs={false}
              disableFuture
              value={selectedDate}
              onChange={this.handleDateChange}
              helperText="Required"
              leftArrowIcon={<Icon> add_alarm </Icon>}
              rightArrowIcon={<Icon> snooze </Icon>}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Icon>add_alarm</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </AlignLeft>
        </HalfColumn>
      </Row>
    );
  }
}
