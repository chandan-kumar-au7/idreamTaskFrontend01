import React from 'react';
import { GeoChart } from 'react-chartkick';
import Box from '../../../components/utility/papersheet';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import IntlMessages from '../../../components/utility/intlMessages';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import { data } from './config';

class ReactChartKick extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <Box title={<IntlMessages id="sidebar.reactChartKick" />}>
              <GeoChart data={data} />
            </Box>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default ReactChartKick;
