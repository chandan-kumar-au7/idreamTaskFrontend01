import { GoogleMapSkins } from '../../containers/Map/Google/config';

const initState = {
  mapSkins: GoogleMapSkins,
  mapSkinsForBasicDemo: 'silver',
  mapSkinsForCustomDemo: 'standard'
};

export default function mapReducer(state = initState, action) {
  switch (action.type) {
    case 'CHANGE_MAP_SKINS':
      return action.demoType === 'basic'
        ? {
            ...state,
            mapSkinsForBasicDemo: action.selectedSkin
          }
        : {
            ...state,
            mapSkinsForCustomDemo: action.selectedSkin
          };
    default:
      return state;
  }
}
