import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { posts } from '../config.js';
import { googleConfig } from '../../../../settings';
import mapActions from '../../../../redux/map/actions';
import { Marker, MarkerInfoWindow } from '../marker';

const { changeMapSkin } = mapActions;

class BasicMarkerMap extends Component {
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
    if (nextProps.mapSkinsForCustomDemo !== this.props.mapSkinsForCustomDemo) {
      this.changeSkins(nextProps.mapSkinsForCustomDemo);
    }
  }
  loadMap(element) {
    const { google } = this.props;
    if (!element || !google) return;
    const self = this;
    this.mateBasicMarkerMap = new google.maps.Map(element, {
      zoom: this.state.zoom,
      center: this.state.center,
      scrollwheel: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
    const RichMarker = require('js-rich-marker');
    const InfoBubble = require('js-info-bubble');
    posts.forEach(post => {
      const marker = RichMarker
        ? new RichMarker.RichMarker({
            map: this.mateBasicMarkerMap,
            animation: google.maps.Animation.DROP,
            flat: true,
            content: Marker(post.marker),
            position: new google.maps.LatLng(post.lat, post.lng),
          })
        : new google.maps.Marker({
            position: new google.maps.LatLng(post.lat, post.lng),
            map: this.mateBasicMarkerMap,
            flat: true,
            animation: google.maps.Animation.DROP,
            content: Marker(post.marker),
          });
      const infoBubble = new InfoBubble({
        maxWidth: 280,
        minWidth: 280,
        maxHeight: 260,
        minHeight: 260,
        shadowStyle: 0,
        padding: 10,
        backgroundColor: '#ffffff',
        position: new google.maps.LatLng(post.lat, post.lng),
        borderRadius: 4,
        arrowSize: 10,
        borderWidth: 0,
        disableAnimation: true,
        autopanMargin: 0,
        hideCloseButton: false,
        arrowStyle: 0,
        // pixelOffset: ,
        backgroundClassName: 'infowindow-backdropClass',
        content: MarkerInfoWindow(post),
      });

      marker.addListener('click', function() {
        if (self.infowindow) {
          self.infowindow.close();
        }
        infoBubble.open(self.mateBasicMarkerMap, marker);
        infoBubble.setBubbleOffset(0, -25);
        // self.mateBasicMarkerMap.setCenter(new google.maps.LatLng(post.lat, post.lng));
        // self.offsetCenter(new google.maps.LatLng(post.lat, post.lng), -100, -100, self.mateBasicMarkerMap)
        self.infowindow = infoBubble;
      });
    });
    this.changeSkins(this.props.mapSkinsForCustomDemo);
  }
  changeSkins(mapSkinsForCustomDemo) {
    const { google, mapSkins } = this.props;
    if (!google || !this.mateBasicMarkerMap) return;
    try {
      const styledMapType = new google.maps.StyledMapType(
        JSON.parse(
          mapSkins[mapSkinsForCustomDemo ? mapSkinsForCustomDemo : 'standard']
        )
      );
      this.mateBasicMarkerMap.mapTypes.set('styled_map', styledMapType);
      this.mateBasicMarkerMap.setMapTypeId('styled_map');
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
})(BasicMarkerMap);

export default connect(
  state => ({
    ...state.Maps,
  }),
  { changeMapSkin }
)(WrappedContainer);
