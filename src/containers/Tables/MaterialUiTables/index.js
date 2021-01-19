import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Papersheet, {
  DemoWrapper,
} from '../../../components/utility/papersheet';
import { Row, FullColumn } from '../../../components/utility/rowColumn';

import BasicTable from './basicTable';
import EnhancedTable from './enhancedTable';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class TablesExample extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <Papersheet title="Basic Table">
              <DemoWrapper>
                <BasicTable {...this.props} />
              </DemoWrapper>
            </Papersheet>
          </FullColumn>
        </Row>
        <Row>
          <FullColumn>
            <Papersheet title="Enhanced Table">
              <DemoWrapper>
                <EnhancedTable {...this.props} />
              </DemoWrapper>
            </Papersheet>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles, { withTheme: true })(TablesExample);
