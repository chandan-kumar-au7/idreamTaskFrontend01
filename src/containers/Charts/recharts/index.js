import React, { Component } from "react";
import {
  SimpleLineCharts,
  CustomizedDotLineChart,
  SimpleBarChart,
  MixBarChart,
  CustomShapeBarChart,
  BiaxialBarChart,
  SimpleAreaChart,
  StackedAreaChart,
  LineBarAreaComposedChart,
  CustomActiveShapePieChart,
  SpecifiedDomainRadarChart,
  SimpleRadialBarChart,
  LegendEffectOpacity
} from "./charts";

import Box from "../../../components/utility/papersheet";
import IntlMessages from "../../../components/utility/intlMessages";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import {
  Row,
  HalfColumn,
  FullColumn
} from "../../../components/utility/rowColumn";
import * as configs from "./config";

export default class ReCharts extends Component {
  render() {
    return (
      <LayoutWrapper className="mapPage">
        <Row>
          <HalfColumn>
            <Box
              title={<IntlMessages id="sidebar.googlechart.BarChart" />}
            >
              <SimpleLineCharts {...configs.SimpleLineCharts} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.CustomizedDotLineChart.title} scroll>
              <CustomizedDotLineChart {...configs.CustomizedDotLineChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.MixBarChart.title} scroll>
              <MixBarChart {...configs.MixBarChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.SimpleBarChart.title} scroll>
              <SimpleBarChart {...configs.SimpleBarChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.CustomShapeBarChart.title} scroll>
              <CustomShapeBarChart {...configs.CustomShapeBarChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.BiaxialBarChart.title} scroll>
              <BiaxialBarChart {...configs.BiaxialBarChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.SimpleAreaChart.title} scroll>
              <SimpleAreaChart {...configs.SimpleAreaChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.StackedAreaChart.title} scroll>
              <StackedAreaChart {...configs.StackedAreaChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.LineBarAreaComposedChart.title} scroll>
              <LineBarAreaComposedChart {...configs.LineBarAreaComposedChart} />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.LegendEffectOpacity.title} scroll>
              <LegendEffectOpacity {...configs.LegendEffectOpacity} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={configs.CustomActiveShapePieChart.title} scroll>
              <CustomActiveShapePieChart
                {...configs.CustomActiveShapePieChart}
              />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title={configs.SimpleRadialBarChart.title} scroll>
              <SimpleRadialBarChart {...configs.SimpleRadialBarChart} />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <FullColumn>
            <Box title={configs.SpecifiedDomainRadarChart.title} scroll>
              <SpecifiedDomainRadarChart
                {...configs.SpecifiedDomainRadarChart}
              />
            </Box>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
