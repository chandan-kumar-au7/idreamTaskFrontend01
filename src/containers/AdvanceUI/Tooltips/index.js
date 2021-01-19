import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../../../components/utility/intlMessages';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import {
  Row,
  OneThirdColumn,
  TwoThirdColumn,
} from '../../../components/utility/rowColumn';
import SimpleTooltips from './simpleTooltips';
import PositionedTooltips from './positionedTooltips';
import Papersheet from '../../../components/utility/papersheet';

const styles = theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  root: {
    width: 500,
  },
});

class TooltipsExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row>
          <OneThirdColumn sm={12}>
            <Papersheet
              title={<IntlMessages id="sidebar.simpletooltips" />}
              stretched
            >
              <SimpleTooltips {...props} />
            </Papersheet>
          </OneThirdColumn>
          <TwoThirdColumn sm={12}>
            <Papersheet
              title={<IntlMessages id="sidebar.positionedtooltips" />}
              stretched
            >
              <PositionedTooltips {...props} />
            </Papersheet>
          </TwoThirdColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles)(TooltipsExamples);
