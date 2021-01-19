import React, { Component } from 'react';
import Async from '../../../helpers/asyncComponent';
import WidgetBox from '../WidgetBox';

const Bar = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-randomizedLine" */ './chart')}
    componentProps={props}
  />
);

export default class SaleChart extends Component {
  render() {
    const { title, description, style, stretched } = this.props;

    return (
      <WidgetBox
        title={title}
        description={description}
        style={style}
        stretched={stretched}
      >
        <Bar />
      </WidgetBox>
    );
  }
}
