import React, { Component } from 'react';
import Async from '../../../helpers/asyncComponent';
import Box from '../../../components/utility/papersheet';
import IntlMessages from '../../../components/utility/intlMessages';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import * as configs from './config';

const GoogleChart = props => (
  <Async
    load={import(/* webpackChunkName: "googleChart" */ 'react-google-charts')}
    componentProps={props}
    componentArguement={'googleChart'}
  />
);

export default class ReCharts extends Component {
  render() {
    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {},
      },
    ];
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.BarChart" />}>
              <GoogleChart {...configs.BarChart} chartEvents={chartEvents} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.lineChart" />}>
              <GoogleChart {...configs.lineChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.bubbleChart" />}>
              <GoogleChart {...configs.BubbleChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.histogram" />}>
              <GoogleChart {...configs.Histogram} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.scatterChart" />}>
              <GoogleChart {...configs.ScatterChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.areaChart" />}>
              <GoogleChart {...configs.AreaChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box
              title={<IntlMessages id="sidebar.googlechart.candlestickChart" />}
            >
              <GoogleChart {...configs.CandlestickChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.comboChart" />}>
              <GoogleChart {...configs.ComboChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.donutChart" />}>
              <GoogleChart {...configs.DonutChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box
              title={<IntlMessages id="sidebar.googlechart.steppedAreaChart" />}
            >
              <GoogleChart {...configs.SteppedAreaChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.timeline" />}>
              <GoogleChart {...configs.Timeline} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.treeMap" />}>
              <GoogleChart {...configs.TreeMap} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.trendLines" />}>
              <GoogleChart {...configs.TrendLines} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.waterfall" />}>
              <GoogleChart {...configs.Waterfall} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.gantt" />}>
              <GoogleChart {...configs.Gantt} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={<IntlMessages id="sidebar.googlechart.wordTree" />}>
              <GoogleChart {...configs.WordTree} />
            </Box>
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export { GoogleChart };
