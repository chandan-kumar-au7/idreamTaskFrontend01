import styled from 'styled-components';
import { palette } from 'styled-theme';
import Papersheet from '../../../components/utility/papersheet';

const UserInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: ${palette('grey', 9)};
    margin: 0;
  }

  p {
    font-size: 13px;
    font-weight: 300;
    color: ${palette('grey', 5)};
    margin: 5px 0 0;
  }
`;

const UserAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;

  .profilePicture {
    width: 80px;
    height: 80px;
    display: inline-flex;
    border-radius: 50%;
    background-color: ${palette('grey', 3)};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .mediaCounter {
    width: 100%;
    display: flex;
    margin-top: 35px;

    .mediaCounterItem {
      width: 33.333%;
      display: inline-flex;
      flex-direction: column;
      flex-shrink: 0;
      text-align: center;
      justify-content: center;

      h5 {
        font-size: 18px;
        font-weight: 400;
        color: ${palette('grey', 9)};
        margin: 0;

        @media only screen and (min-width: 1500px) {
          font-size: 21px;
        }
      }

      p {
        font-size: 11px;
        color: ${palette('grey', 5)};
        margin: 10px 0 0;
        letter-spacing: 2px;
        text-transform: uppercase;

        @media only screen and (min-width: 1500px) {
          font-size: 13px;
        }
      }
    }
  }
`;

const MediaItem = styled.div`
  width: calc(100% / 4 - 12px);
  height: 70px;
  max-width: 70px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  background-color: ${palette('grey', 3)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Media = styled.div`
  width: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-height: 300px;
  overflow-y: auto;
`;

const InstagramWidget = styled(Papersheet)`
  width: 100%;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }
`;

export { InstagramWidget, UserInformation, UserAction, Media, MediaItem };
