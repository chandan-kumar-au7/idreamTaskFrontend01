import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition } from '../../settings/style-util';
import WithDirection from '../../settings/withDirection';
import IconButtons from '../../components/uielements/iconbutton';
import Icons from '../../components/uielements/icon';
import { Fab } from '../../components/uielements/button';

const Icon = styled(Icons)``;
const Button = styled(Fab)`
  border: 0;
  padding: 5px 15px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  margin-left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : 'auto')};
  margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : 'inherit')};
  ${transition()};
  z-index: 100000;

  ${Icon} {
    font-size: 24px;
    color: #ffffff;
  }
`;
const DragIcon = styled(IconButtons)`
  font-size: 12px;
  color: ${palette('grey', 4)};
`;

const IconButton = styled(IconButtons)`
  color: ${palette('grey', 8)};
`;

const NoteComponentWrapper = styled.div`
  padding: 30px;
  display: flex;
  background: #ececec;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 767px) {
    padding: 20px;
    height: auto;
    flex-direction: column;

    &.ant-layout.ant-layout-has-sider {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 30px;
  }
`;

const NoteComponent = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
  }
`;

const WDNoteListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  width: 360px;
  background: #ffffff;
  border-right: ${props => (props['data-rtl'] === 'rtl' ? 0 : 1)}px solid
    ${palette('border', 0)};
  border-left: ${props => (props['data-rtl'] === 'rtl' ? 1 : 0)}px solid
    ${palette('border', 0)};

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    width: 260px !important;
    flex: 0 0 260px !important;
    max-width: none !important;
    min-width: 0 !important;
  }
  @media only screen and (max-width: 767px) {
    width: auto !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin-bottom: 30px;
    flex: 0 0 450px !important;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom: 30px;
    background-color: #ffffff;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

const WDNotePadHeader = styled.div`
  height: 76px;
  line-height: inherit;
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #ffffff;
  border-bottom: 1px solid ${palette('border', 0)};

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
  }

  .ColorChooseWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-right: ${props =>
      props['data-rtl'] === 'rtl' ? 'inherit' : 'auto'};
    margin-left: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : 'inherit')};

    span {
      font-size: 13px;
      color: ${palette('grayscale', 0)};
    }

    .ColorChooser {
      min-width: 20px;
      min-height: 20px;
      position: relative;
      cursor: pointer;
      border: 0;
      margin: ${props =>
        props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0'};
      padding: 0;
      border-radius: 3px;
    }
  }
`;

const WDNotePad = styled.div`
  background: #ffffff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex: auto;
  flex: auto;

  @media only screen and (max-width: 767px) {
    flex-shrink: 0;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .noteEditingArea {
    height: 100%;
    overflow: hidden;
    position: relative;

    @media (max-width: 800px) {
      max-height: 450px;
      border-bottom: 1px solid #ececec;
    }
    .editor {
      height: 100%;
    }
    .quill {
      height: 100%;
      .ql-toolbar.ql-snow {
        border-left: none;
        border-top: none;
        border-right: none;
      }
      .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border: none !important;
      }

      @media only screen and (max-width: 767px) {
        .ql-container {
          max-height: 450px;
          overflow-y: auto;
        }
      }

      .ql-editor {
        max-height: 100%;
        overflow-y: auto;
      }
    }

    .noteTextbox {
      font-size: 14px;
      color: ${palette('text', 2)};
      line-height: 24px;
      width: 100%;
      height: 100%;
      border: 0;
      outline: 0;
      padding: 20px 30px;
      resize: none;
      box-sizing: border-box;

      @media only screen and (max-width: 480px) {
        padding: 20px;
      }
    }
  }

  @media (max-width: 767px) {
    .noteListSidebar.ant-layout-sider {
      width: auto !important;
      margin-bottom: 30px;
      flex: 0 0 450px !important;
    }
  }
`;

export default WithDirection(NoteComponentWrapper);
const NoteListWrapper = WithDirection(WDNoteListWrapper);
const NotePad = WithDirection(WDNotePad);
const NotePadHeader = WithDirection(WDNotePadHeader);
export {
  NoteComponent,
  NoteListWrapper,
  NotePad,
  Button,
  Icon,
  NotePadHeader,
  IconButton,
  DragIcon,
};
