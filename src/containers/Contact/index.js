import React, { Component } from 'react';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import { Row, FullColumn } from '../../components/utility/rowColumn';
import Contacts from './contactBox';

export default class Contact extends Component {
  render() {
    const { scrollHeight } = this.props;
    return (
      <LayoutWrapper style={{ height: scrollHeight }}>
        <Row>
          <FullColumn>
            <Contacts />
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
