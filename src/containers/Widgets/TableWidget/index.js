import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import WidgetBox from '../WidgetBox';
import Table from './table';
import { DemoWrapper } from '../../../components/utility/papersheet';

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

class TableWidget extends Component {
  render() {
    const { title, description, stretched } = this.props;

    return (
      <WidgetBox title={title} description={description} stretched={stretched}>
        <DemoWrapper>
          <Table {...this.props} />
        </DemoWrapper>
      </WidgetBox>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TableWidget);
