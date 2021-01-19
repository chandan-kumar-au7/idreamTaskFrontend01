import customIcon from '../../../images/map-pin-2.svg';
import customIconShadow from '../../../images/marker-shadow.png';
// import '' from '../../../image/marker-shadow.png';
// import '' from '../../../image/image1.jpg';
// import '' from '../../../image/image3.jpg';
// import '' from '../../../image/image4.jpg';
// import '' from '../../../image/image5.jpg';

const basicMarkers = [
  {
    position: [40.68792, -74.01626],
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square Park</h3>
      </div>`,
  },
  {
    position: [40.72143, -74.05729],
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
  {
    position: [40.7215, -73.999],
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square</h3>
      </div>`,
  },
  {
    position: [40.696518, -73.95352],
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>New York University</h3>
      </div>`,
  },
  {
    position: [40.6943, -74.074201],
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Library Golf Club</h3>
      </div>`,
  },
];

const customIconMarkers = [
  {
    position: [40.68792, -74.01626],
    iconUrl: customIcon,
    shadowUrl: customIconShadow,
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
];

const customHtmlMarker = [
  {
    position: [40.68792, -74.01626],
    html: `
      <MarkerWrapper className="marker-icon-wrapper">
        <i className="ion-flame" />
      </MarkerWrapper>`,
    className: 'marker-icon',
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
];

const markerCluster = [
  {
    position: [40.68792, -74.01626],
    iconUrl: customIcon,
    iconSize: [40, 40],
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
  {
    position: [40.72143, -74.05729],
    iconUrl: customIcon,
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
  {
    position: [40.7215, -73.999],
    iconUrl: customIcon,
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Washington Square</h3>
      </div>`,
  },
  {
    position: [40.696518, -73.95352],
    iconUrl: customIcon,
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>New York University</h3>
      </div>`,
  },
  {
    position: [40.6943, -74.074201],
    iconUrl: customIcon,
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Library Golf Club</h3>
      </div>`,
  },
  {
    position: [40.6943, -74.074201],
    iconUrl: customIcon,
    popupText: `
      <div className="infoWindowImage">
        <img src=${customIcon} alt="" />
      </div>
      <div className="infoWindowDetails">
        <h3>Library Golf Club Old Portion</h3>
      </div>`,
  },
];

const markerRouting = {
  postion_start: [40.72143, -74.05729],
  iconUrl: customIcon,
  postion_end: [40.6943, -74.074201],
};

export {
  basicMarkers,
  customIconMarkers,
  customHtmlMarker,
  markerCluster,
  markerRouting,
};
