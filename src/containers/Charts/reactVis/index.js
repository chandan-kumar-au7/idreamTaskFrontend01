import React, { Component } from 'react';

import {
  LineSeries,
  LineMark,
  AreaChartElevated,
  StackedHorizontalBarChart,
  ClusteredStackedBarChart,
  CustomScales,
  CircularGridLines,
  DynamicProgrammaticRightedgehints,
  DynamicCrosshairScatterplot,
  SimpleRadialChart,
  SimpleDonutChart,
  CustomRadius,
  SimpleTreeMap,
  DynamicTreeMap,
  BasicSunburst,
  AnimatedSunburst,
  CandleStick,
  ComplexChart,
  StreamGraph,
} from './charts';
import * as configs from './config';
import Box from '../../../components/utility/papersheet';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import {
  Row,
  HalfColumn,
  FullColumn,
} from '../../../components/utility/rowColumn';
import 'react-vis/dist/style.css';

export default class ReactVis extends Component {
  render() {
    return (
      <LayoutWrapper className="mapPage">
        <Row>
          <HalfColumn>
            <Box title={configs.LineSeries.title}>
              <LineSeries {...configs.LineSeries} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.LineMark.title}>
              <LineMark {...configs.LineMark} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.AreaChartElevated.title}>
              <AreaChartElevated {...configs.AreaChartElevated} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.StackedHorizontalBarChart.title}>
              <StackedHorizontalBarChart
                {...configs.StackedHorizontalBarChart}
              />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.ClusteredStackedBarChart.title}>
              <ClusteredStackedBarChart {...configs.ClusteredStackedBarChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.CustomScales.title}>
              <CustomScales {...configs.CustomScales} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.CircularGridLines.title}>
              <CircularGridLines {...configs.CircularGridLines} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.DynamicProgrammaticRightedgehints.title}>
              <DynamicProgrammaticRightedgehints
                {...configs.DynamicProgrammaticRightedgehints}
              />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.DynamicCrosshairScatterplot.title}>
              <DynamicCrosshairScatterplot
                {...configs.DynamicCrosshairScatterplot}
              />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.SimpleRadialChart.title}>
              <SimpleRadialChart {...configs.SimpleRadialChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.SimpleDonutChart.title}>
              <SimpleDonutChart {...configs.SimpleDonutChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.CustomRadius.title}>
              <CustomRadius {...configs.CustomRadius} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.SimpleTreeMap.title}>
              <SimpleTreeMap {...configs.SimpleTreeMap} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.DynamicTreeMap.title}>
              <DynamicTreeMap {...configs.DynamicTreeMap} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.SimpleTreeMap.title}>
              <SimpleTreeMap {...configs.SimpleTreeMap} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.DynamicTreeMap.title}>
              <DynamicTreeMap {...configs.DynamicTreeMap} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.BasicSunburst.title}>
              <BasicSunburst {...configs.BasicSunburst} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.AnimatedSunburst.title}>
              <AnimatedSunburst {...configs.AnimatedSunburst} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.CandleStick.title}>
              <CandleStick {...configs.CandleStick} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.ComplexChart.title}>
              <ComplexChart {...configs.ComplexChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <FullColumn>
            <Box title={configs.StreamGraph.title}>
              <StreamGraph {...configs.StreamGraph} />
            </Box>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
