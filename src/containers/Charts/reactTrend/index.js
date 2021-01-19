import React, { Component } from 'react';
import Async from '../../../helpers/asyncComponent';
import {
  data,
  autoDraw,
  autoDrawDuration,
  autoDrawEasing,
  smooth,
  gradient,
  radius,
  strokeWidth,
  strokeLinecap,
} from './config';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/papersheet';

const Trend = props => (
  <Async
    load={import(/* webpackChunkName: "react-trend" */ 'react-trend')}
    componentProps={props}
  />
);

export default class ReactTrend extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <Box>
              <Trend
                smooth={smooth}
                autoDraw={autoDraw}
                autoDrawDuration={parseInt(autoDrawDuration, 10)}
                autoDrawEasing={autoDrawEasing}
                height={100}
                width={600}
                data={data}
                gradient={gradient}
                radius={parseInt(radius, 10)}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
              />
            </Box>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
