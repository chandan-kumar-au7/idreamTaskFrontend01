const MarkerInfoWindow = props => {
  return `<div class="infoWindowWrapper">
            <div class="infoWindow">
              <div class="infoWindowImage">
                <img alt="#" src="${props.img}" />
              </div>
              <div class="infoWindowDetails">
                <div class="infoWindowTitle">
                  <h3 class="heading">${props.title}</h3>
                  <h5>${props.subTitle}</h5>
                  <p class="location">${props.location}</p>
                </div>
                <div class="infoWindowRating">
                  <div class="infoWindowRatingContent">
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star_border</i>
                  </div>
                  193 Reviews
                </div>

              </div>
            </div>
          </div>`;
};

const Marker = props => {
  return `<div class="marker-icon map-marker">
      <div class="marker-icon-wrapper">
        <i class="material-icons map-marker-icon">${props.iconClass}</i>
      </div>
    </div>`;
};

export { Marker, MarkerInfoWindow };
