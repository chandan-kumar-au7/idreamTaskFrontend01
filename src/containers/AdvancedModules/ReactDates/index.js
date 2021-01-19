import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import Tabs, { Tab } from '../../../components/uielements/tabs';
import Switch from '../../../components/uielements/switch';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/papersheet';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Content from '../../../components/utility/papersheet';
import {
  DateRangePicker,
  SingleDatePicker,
} from '../../../components/uielements/reactDates';
import configs from './config';
import { ReactDatesStyleWrapper, ReactDatesWrapper } from './reactDates.style';

class ReactDates extends Component {
  constructor(props) {
    super(props);
    this.renderDatePicker = this.renderDatePicker.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.state = {
      tabValue: 0,
      isRangePicker: false,
      configsValue: configs,
      singleFocused: true,
      singleResult: null,
      focusedInput: 'startDate',
      startDate: null,
      endDate: null,
    };
  }
  toggleOptions() {
    const { isRangePicker, configsValue } = this.state;
    const options =
      isRangePicker === true
        ? configsValue[1].options
        : configsValue[0].options;
    return options.map((option, index) => {
      if (this.props.view === 'MobileView' && option.id === 'numberOfMonths') {
        return '';
      }
      const checked = option.value === option.trueValue;
      const onChange = () => {
        if (isRangePicker) {
          configsValue[1].options[index].value = checked
            ? option.falseValue
            : option.trueValue;
        } else {
          configsValue[0].options[index].value = checked
            ? option.falseValue
            : option.trueValue;
        }
        this.setState(configsValue);
      };
      return (
        <div key={option.id}>
          <h2>{option.title}</h2>
          <Switch checked={Boolean(checked)} onChange={onChange} />
        </div>
      );
    });
  }
  renderDatePicker(config) {
    const {
      isRangePicker,
      startDate,
      endDate,
      focusedInput,
      singleResult,
      singleFocused,
      configsValue,
    } = this.state;
    let options;
    if (isRangePicker) {
      options = {
        startDate,
        endDate,
        onDatesChange: ({ startDate, endDate }) =>
          this.setState({ startDate, endDate }),
        focusedInput,
        onFocusChange: focusedInput => {
          this.setState({ focusedInput });
        },
      };
    } else {
      options = {
        date: singleResult,
        onDateChange: singleResult => this.setState({ singleResult }),
        focused: singleFocused,
        onFocusChange: ({ focused }) =>
          this.setState({ singleFocused: focused }),
      };
    }
    const renderOptions = isRangePicker
      ? configsValue[1].options
      : configsValue[0].options;
    renderOptions.forEach(option => {
      options[option.id] = option.value;
    });
    if (this.props.view === 'MobileView') {
      options.numberOfMonths = 1;
    }
    return (
      <div className="reactDate">
        {!isRangePicker ? (
          <SingleDatePicker {...options} />
        ) : (
          <DateRangePicker isOutsideRange={() => false} {...options} />
        )}
      </div>
    );
  }
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>React Dates</PageHeader>
        <Row>
          <FullColumn>
            <Box>
              <Content>
                <Tabs
                  value={this.state.tabValue}
                  onChange={(event, value) => {
                    this.setState({
                      isRangePicker: value === 1,
                      tabValue: value,
                    });
                  }}
                >
                  {configs.map(config => (
                    <Tab label={config.title} key={config.id} />
                  ))}
                </Tabs>
                <ReactDatesStyleWrapper className="reactDateConfig">
                  {this.toggleOptions()}
                </ReactDatesStyleWrapper>
                <ReactDatesWrapper>
                  {this.renderDatePicker(configs[0])}
                </ReactDatesWrapper>
              </Content>
            </Box>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default connect(state => ({
  view: state.App.view,
}))(ReactDates);
