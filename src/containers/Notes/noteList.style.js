import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition } from '../../settings/style-util';
import Input from '../../components/uielements/inputSearch';
import WithDirection from '../../settings/withDirection';
import IconButtons from '../../components/uielements/iconbutton';
import Icons from '../../components/uielements/icon';

const IconButton = styled(IconButtons)`
  color: ${palette('grey', 8)};
`;

const Icon = styled(Icons)``;

const MoreIcon = styled(IconButtons)`
  color: ${palette('grey', 4)};
  width: 30px;
  height: 30px;
  padding: 0;
  margin: auto;
  ${Icon} {
    font-size: 16px;
  }
`;

const InputSearch = styled(Input)`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  > label {
    padding-left: 15px;
    padding-right: 15px;
    z-index: 1;
  }
  > div {
    width: 100%;
    margin-top: 0px;
  }
  > div {
    &:hover {
      &:before {
        background-color: transparent !important;
      }
    }
  }
  input {
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: ${palette('grey', 8)};
    line-height: inherit;
    height: 67px;
    padding: 0 20px;
    border: 0;
    border-bottom: 0;
    outline: 0 !important;
    overflow: hidden;
    background-color: #ffffff;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    border-radius: 0;
    box-shadow: none;
    ${transition()};
  }
  &:hover {
    background: transparent;
    ${'' /* &:before {
      background-color: ${palette('grey', 3)} !important;
    } */}
  }

  @media only screen and (max-width: 767px) {
    height: 50px;
  }
`;

const NoteListSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media only screen and (max-width: 767px) {
    height: auto;
  }

  .noteList {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: hidden;
    overflow-y: auto;
    @media only screen and (max-width: 767px) {
      margin-top: 15px;
    }

    .scroll-content {
      > div {
        overflow: hidden;
      }
    }

    .list {
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      padding: 0;
      text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
      position: relative;
      margin-bottom: 0;
      border-right: 0;
      border-bottom: 1px solid ${palette('grey', 2)};
      transition: all 0.3s ease;
      &:hover {
        background: #f3f3f3;
      }

      &.active {
        background: #f3f3f3;
        .noteText {
          > div {
            margin: 0;
            margin-bottom: 8px;
          }
        }
      }

      .noteBGColor {
        width: 5px;
        display: flex;
        flex-shrink: 0;
      }

      .noteText {
        width: calc(100% - 48px);
        display: inline-flex;
        flex-direction: column;
        cursor: pointer;
        box-sizing: border-box;
        padding: 15px 0 20px 15px;
        overflow: hidden;
        > h1,
        > h2,
        > p,
        > div {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: ${palette('grey', 8)};
          font-weight: 500;
          font-size: 14px;
          margin: 0;
          margin-bottom: 8px;
          display: inline-flex;
        }
        p {
          margin: 0;
        }
        h1,
        h2 {
          font-size: 17px;
          margin: 0;
        }
        blockquote {
          margin: 0;
        }
        ul,
        ol {
          margin: 0;
          padding: 0;
        }

        .noteCreatedDate {
          font-size: 13px;
          flex-shrink: 0;
          color: #757575;
        }
      }
    }

    .notlistNotice {
      font-size: 14px;
      font-weight: 400;
      color: ${palette('grayscale', 0)};
      line-height: inherit;
      padding: 30px 20px;
    }
  }
`;

export { InputSearch, MoreIcon, Icon, IconButton };
export default WithDirection(NoteListSidebar);
