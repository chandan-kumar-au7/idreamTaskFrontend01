import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries
} from "react-vis";

export default class AreaChartElevated extends Component {
  render() {
    const { datas, width, height } = this.props;
    return (
      <XYPlot width={width} height={height}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        {datas.map((data, key) => {
          const config = {
            key,
            className: data.className,
            data: data.data,
            color: data.color
          };
          return <AreaSeries {...config} />;
        })}
        <LineMarkSeries
          className="area-elevated-line-series"
          data={datas[1].data}
        />
      </XYPlot>
    );
  }
}
