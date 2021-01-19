import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../../../components/utility/intlMessages';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Papersheet from '../../../components/utility/papersheet';
import {
  Row,
  HalfColumn,
  FullColumn,
} from '../../../components/utility/rowColumn';
import ImageOnly from './imageOnly';
import ImageWithTitleBar from './imageWithTitleBar';
import SingleLineGridList from './singleLineGridList';

class GridListExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.imageonlygridlist" />}
              stretched
            >
              <ImageOnly {...props} />
            </Papersheet>
          </HalfColumn>

          <HalfColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.gridlistwithtitlebars" />}
              stretched
            >
              <ImageWithTitleBar {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>

        <Row>
          <FullColumn>
            <Papersheet
              title={<IntlMessages id="sidebar.singlelinegridlist" />}
            >
              <SingleLineGridList {...props} />
            </Papersheet>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles({})(GridListExamples);
