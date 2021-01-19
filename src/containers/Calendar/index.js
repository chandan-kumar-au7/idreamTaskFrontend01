import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopView from './desktopView';
import MobileView from './mobileView';

class Calendar extends Component {
  render() {
    const { view } = this.props;
    const CalendarView = view === 'MobileView' ? MobileView : DesktopView;
    return (
      <div style={{ height: '100%' }}>
        <CalendarView />
      </div>
    );
  }
}
export default connect(state => ({
  ...state.App,
}))(Calendar);
