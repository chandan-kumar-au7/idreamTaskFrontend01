import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { posts } from '../config.js';
import { googleConfig } from '../../../../settings';
import mapActions from '../../../../redux/map/actions';

const { changeMapSkin } = mapActions;

class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
    this.changeSkins = this.changeSkins.bind(this);
    this.state = {
      center: { lat: 40.78306, lng: -73.971249 }, // 40.783060, -73.971249
      zoom: 13,
      posts,
      infoWindow: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.mapSkinsForBasicDemo !== this.props.mapSkinsForBasicDemo) {
      this.changeSkins(nextProps.mapSkinsForBasicDemo);
    }
  }
  loadMap(element) {
    const { google, mapSkinsForBasicDemo } = this.props;
    if (!element || !google) return;
    this.mateMap = new google.maps.Map(element, {
      zoom: this.state.zoom,
      center: this.state.center,
      scrollwheel: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
        mapTypeIds: ['styled_map'],
      },
    });

    this.changeSkins(mapSkinsForBasicDemo);
  }
  changeSkins(mapSkinsForBasicDemo) {
    const { google, mapSkins } = this.props;
    if (!google || !this.mateMap) return;
    try {
      const styledMapType = new google.maps.StyledMapType(
        JSON.parse(
          mapSkins[mapSkinsForBasicDemo ? mapSkinsForBasicDemo : 'silver']
        )
      );
      this.mateMap.mapTypes.set('styled_map', styledMapType);
      this.mateMap.setMapTypeId('styled_map');
    } catch (err) {}
  }
  render() {
    const { loaded } = this.props;
    return (
      <div>
        {loaded ? (
          <div
            className="googleMap"
            style={{ height: '650px', width: '100%' }}
            ref={this.loadMap}
          />
        ) : (
          <span>API is Loading</span>
        )}
      </div>
    );
  }
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: googleConfig.apiKey,
})(BasicMap);

export default connect(
  state => ({
    ...state.Maps,
  }),
  { changeMapSkin }
)(WrappedContainer);
