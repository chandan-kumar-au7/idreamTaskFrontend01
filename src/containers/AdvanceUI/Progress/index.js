import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../../../components/utility/intlMessages';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import green from '@material-ui/core/colors/green';
import CircularProgres from './circularProgress';
import InteractiveProgress from './interactiveProgress';
import LinearIndeterminate from './linearIndeterminate';
import Papersheet from '../../../components/utility/papersheet';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing(2)}px`,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  linearRoot: {
    width: '100%',
    marginTop: 30,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class ProgressExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.circularprogress" />}
              stretched
            >
              <CircularProgres {...props} />
            </Papersheet>
          </HalfColumn>
          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.interactiveprogress" />}
              stretched
            >
              <InteractiveProgress {...props} />
            </Papersheet>
          </HalfColumn>
          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.linearindeterminateprogress" />}
            >
              <LinearIndeterminate {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles(styles)(ProgressExamples);
