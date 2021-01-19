import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import * as config from "./config";
import WidgetBox from "../WidgetBox";

export default class Visitors extends Component {
  render() {
    const { title, description, stretched } = this.props;

    return (
      <WidgetBox title={title} description={description} stretched={stretched}>
        <Bar {...config} />
      </WidgetBox>
    );
  }
}
