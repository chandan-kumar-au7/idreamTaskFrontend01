import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../../../components/utility/intlMessages';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Papersheet from '../../../components/utility/papersheet';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import blue from '@material-ui/core/colors/blue';

import SampleDialog from './sampleDialog';
import AlertDialog from './alertDialog';
import AlertDialogSlide from './slideAlertDialog';
import FullScreenDialog from './fullScreenDialog';
import FormDialog from './formDialog';

const styles = theme => ({
  dialog: {
    margin: `0 ${theme.spacing(2)}px`,
  },
  avatar: {
    background: blue[100],
    color: blue[600],
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});

class DialogsExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.sampleDialogs" />}
              stretched
            >
              <SampleDialog {...props} />
            </Papersheet>
          </HalfColumn>

          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.alertDialogs" />}
              stretched
            >
              <AlertDialog {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.slideAlertDialogs" />}
              stretched
            >
              <AlertDialogSlide {...props} />
            </Papersheet>
          </HalfColumn>

          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.fullScreenDialogs" />}
              stretched
            >
              <FullScreenDialog {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <Papersheet title={<IntlMessages id="sidebar.formDialog" />}>
              <FormDialog {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles)(DialogsExamples);
