import styled from 'styled-components';
import { palette } from 'styled-theme';
import Buttons from '../../../components/uielements/button';

const Button = styled(Buttons)`
  margin: 3px 10px 3px 0;
`;
const SkinSwitcherWrapper = styled.div`
  margin-bottom: 30px;
`;
const BasicMarkerWrapper = styled.div`
  .map-marker-icon {
    font-size: 48px;
    color: ${palette('blue', 15)};
  }
  .infowindow-backdropClass {
    ${'' /* padding: 15px;*/};
  }
  .infoWindowWrapper {
    .infoWindowImage {
      width: 100%;
      height: auto;
      img {
        width: 100%;
      }
    }
    .heading {
      margin-bottom: 0;
      font-size: 14px;
      color: ${palette('grey', 8)};
    }
    h5 {
      margin-top: 5px;
      color: ${palette('grey', 5)};
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
  .infoWindowDetails {
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .infoWindowTitle {
      flex-basis: 65%;
    }
    .infoWindowRating {
      flex-basis: 35%;
    }
    .location {
      color: ${palette('grey', 7)};
      font-size: 13px;
      margin: 0;
    }
    .infoWindowRating {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 15px;
      .infoWindowRatingContent {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        font-size: 11px;
      }
      i {
        color: ${palette('orange', 14)};
        font-size: 18px;
      }
    }
  }
`;
export { Button, SkinSwitcherWrapper, BasicMarkerWrapper };
