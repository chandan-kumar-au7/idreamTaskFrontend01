import React, { Component } from "react";
import Async from '../../../helpers/asyncComponent';
import WidgetBox from "../WidgetBox";

const MixedData = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-mix" */ './mix')}
    componentProps={props}
  />
);

export default class Statistics extends Component {
  render() {
    const { title, description, stretched } = this.props;

    return (
      <WidgetBox title={title} description={description} stretched={stretched}>
        <MixedData />
      </WidgetBox>
    );
  }
}
