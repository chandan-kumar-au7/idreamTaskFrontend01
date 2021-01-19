import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapActions from '../../../redux/map/actions';
import { Button, SkinSwitcherWrapper } from './googleMap.style';

const { changeMapSkin } = mapActions;

class SkinSwitcher extends Component {
  constructor(props) {
    super(props);
    this.changeSkins = this.changeSkins.bind(this);
  }
  changeSkins(value, e) {
    e.preventDefault();
    const {
      demoType,
      mapSkinsForBasicDemo,
      mapSkinsForCustomDemo,
    } = this.props;
    if (demoType === 'basic') {
      if (mapSkinsForBasicDemo === value) {
        return;
      }
    } else {
      if (mapSkinsForCustomDemo === value) {
        return;
      }
    }
    this.props.changeMapSkin(value, demoType);
  }
  render() {
    const {
      mapSkins,
      mapSkinsForBasicDemo,
      mapSkinsForCustomDemo,
      demoType,
    } = this.props;
    const mapSkinsRender = [];
    for (const key in mapSkins) {
      if (mapSkins.hasOwnProperty(key)) {
        mapSkinsRender.push(key);
      }
    }
    const renderButton = (skins, index) => {
      let activeButton = false;
      if (demoType === 'basic' && skins === mapSkinsForBasicDemo) {
        activeButton = true;
      } else if (
        demoType === 'basicMarker' &&
        skins === mapSkinsForCustomDemo
      ) {
        activeButton = true;
      }
      return (
        <Button
          key={index}
          variant={activeButton ? 'raised' : 'flat'}
          color="primary"
          onClick={this.changeSkins.bind(this, skins)}
        >
          {skins}
        </Button>
      );
    };
    return (
      <SkinSwitcherWrapper>
        {mapSkinsRender.length ? mapSkinsRender.map(renderButton) : null}
      </SkinSwitcherWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.Maps,
  }),
  { changeMapSkin }
)(SkinSwitcher);
