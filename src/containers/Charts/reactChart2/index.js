import React from 'react';
import Async from '../../../helpers/asyncComponent';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';

const Doughnut = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-Doughnut" */ './components/doughnut/doughnut')}
    componentProps={props}
  />
);
const DynamicDoughnut = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-dynamic-doughnut" */ './components/dynamic-doughnut/dynamic-doughnut')}
    componentProps={props}
  />
);
const Pie = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-pie" */ './components/pie/pie')}
    componentProps={props}
  />
);
const Line = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-line" */ './components/line/line')}
    componentProps={props}
  />
);
const Bar = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-bar" */ './components/bar/bar')}
    componentProps={props}
  />
);
const HorizontalBar = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-horizontalBar" */ './components/horizontalBar/horizontalBar')}
    componentProps={props}
  />
);
const Radar = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-radar" */ './components/radar/radar')}
    componentProps={props}
  />
);
const Polar = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-polar" */ './components/polar/polar')}
    componentProps={props}
  />
);
const Bubble = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-bubble" */ './components/bubble/bubble')}
    componentProps={props}
  />
);
const MixedData = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-mix" */ './components/mix/mix')}
    componentProps={props}
  />
);
const RandomizedDataLine = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-randomizedLine" */ './components/randomizedLine/randomizedLine')}
    componentProps={props}
  />
);
// const PageHeader = props => (
//   <Async
//     load={import(/* webpackChunkName: "ReactChart2-pageHeader" */ '../../../components/utility/pageHeader')}
//     componentProps={props}
//   />
// );
const Box = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-box" */ '../../../components/utility/papersheet')}
    componentProps={props}
  />
);
const LayoutWrapper = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-layoutWrapper" */ '../../../components/utility/layoutWrapper')}
    componentProps={props}
  />
);
// const Content = props => (
//   <Async
//     load={import(/* webpackChunkName: "ReactChart2-contentHolder" */ '../../../components/utility/papersheet')}
//     componentProps={props}
//   />
// );
// const basicStyle = props =>
//   <Async
//     load={import(/* webpackChunkName: "ReactChart2-basicStyle" */ "../../../config/basicStyle")}
//     componentProps={props}
//   />;

class ReactChart2 extends React.Component {
  render() {
    return (
      <LayoutWrapper className="mapPage">
        <Row>
          <HalfColumn>
            <Box title="Doughnut" stretched>
              <Doughnut />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Dynamicly refreshed Doughnut">
              <DynamicDoughnut />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title="Pie">
              <Pie />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Line">
              <Line />
            </Box>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <Box title="Bar (custom size)" stretched>
              <Bar />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Horizontal Bar Example" stretched>
              <HorizontalBar />
            </Box>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <Box title="Radar">
              <Radar />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Polar">
              <Polar />
            </Box>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <Box title="Bubble">
              <Bubble />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box title="Mixed Data">
              <MixedData />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title="Random Animated">
              <RandomizedDataLine />
            </Box>
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default ReactChart2;
