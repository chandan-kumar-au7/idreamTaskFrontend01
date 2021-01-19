import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../../../components/utility/intlMessages';
import { Row, HalfColumn } from '../../../components/utility/rowColumn';
import Box from '../../../components/utility/papersheet';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import BasicUsage from './basicUsage';
import DateNTimePicker from './dateNTimePicker';
import CustomDayElement from './customDayElement';
// import PersianPickers from './persianPickers';

const styles = theme => ({
  dayWrapper: {
    position: 'relative',
  },
  day: {
    width: 36,
    height: 36,
    fontSize: 14,
    margin: '0 2px',
    color: theme.palette.text.primary,
  },
  customDayHighlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '2px',
    right: '2px',
    border: '2px solid #6270bf',
    borderRadius: '50%',
  },
  nonCurrentMonthDay: {
    color: '#BCBCBC',
  },
  highlightNonCurrentMonthDay: {
    color: '#676767',
  },
  highlight: {
    background: '#9fa8da',
  },
  firstHighlight: {
    extend: 'highlight',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    extend: 'highlight',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
});

class MaterialUIPicker extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <Box
              title={<IntlMessages id="materialPicker.basicUsage" />}
              stretched
            >
              <BasicUsage />
            </Box>
          </HalfColumn>
          <HalfColumn>
            <Box
              title={<IntlMessages id="materialPicker.dateNtimePicker" />}
              stretched
            >
              <DateNTimePicker />
            </Box>
          </HalfColumn>
        </Row>
        <Row>
          <HalfColumn>
            <Box title={<IntlMessages id="materialPicker.customPicker" />}>
              <CustomDayElement {...props} />
            </Box>
          </HalfColumn>
        </Row>
        {/* <Row>
          <FullColumn>
            <Box title="Persian Pickers">
              <PersianPickers />
            </Box>
          </FullColumn>
        </Row> */}
      </LayoutWrapper>
    );
  }
}

export default withStyles(styles)(MaterialUIPicker);
