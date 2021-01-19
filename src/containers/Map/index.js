import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import { Row, FullColumn } from '../../components/utility/rowColumn';
import Papersheet from '../../components/utility/papersheet';
import GoogleMap from './Google/';
import LeafletMap from './leaflet/';

const NavContainer = props => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>{props.children}</div>
  );
};
export default class index extends Component {
  render() {
    const { url } = this.props.match;
    return (
      <LayoutWrapper>
        <Papersheet>
          <Row>
            <FullColumn>
              <NavLink
                to="googlemap"
                className={url !== '/dashboard/leafletmap' ? 'active' : ''}
                style={{ display: 'block' }}
              >
                Google Map
              </NavLink>
              <NavLink
                to="leafletmap"
                className={url === '/dashboard/leafletmap' ? 'active' : ''}
                style={{ display: 'block' }}
              >
                Leaflet Map
              </NavLink>
            </FullColumn>
          </Row>
        </Papersheet>

        <NavContainer>
          <Row>
            <FullColumn>
              {url !== '/dashboard/leafletmap' ? <GoogleMap /> : <LeafletMap />}
            </FullColumn>
          </Row>
        </NavContainer>
      </LayoutWrapper>
    );
  }
}
