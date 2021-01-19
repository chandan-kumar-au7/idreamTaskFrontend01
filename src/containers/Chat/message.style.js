import styled from 'styled-components';
import { palette } from 'styled-theme';
import Buttons, { Fab } from '../../components/uielements/button';
import Icons from '../../components/uielements/icon';
import ReactDrawers from 'react-motion-drawer';
import TextFields from '../../components/uielements/textfield';
import LayoutWrappers from '../../components/utility/layoutWrapper';
import Dialogs from '../../components/uielements/dialogs';
import InputNames from '../../components/chat/inputName';
import Papersheet from '../../components/utility/papersheet/index.js';
import Radio, {
  RadioGroup as RadioGroups,
} from '../../components/uielements/radio';
import { DatePicker as DatePickers } from '../../components/uielements/materialUiPicker';
import { InputLabel as InputLabels } from '../../components/uielements/input';
import {
  FormLabel as FormLabels,
  FormGroup as FormGroups,
  FormControl as FormControls,
} from '../../components/uielements/form';

const Icon = styled(Icons)``;
const InputName = styled(InputNames)``;
const Input = styled(TextFields)``;
const InputLabel = styled(InputLabels)``;
const FormGroup = styled(FormGroups)``;
const FormLabel = styled(FormLabels)``;
const FormControl = styled(FormControls)``;
const DatePicker = styled(DatePickers)``;
const RadioGroup = styled(RadioGroups)``;

const LayoutWrapper = styled(LayoutWrappers)`
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    padding: 15px;
  }
`;
const ReactDrawer = styled(ReactDrawers)`
  width: 100%;
  background: #ffffff;
`;

const MessageSingle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  align-items: flex-start;
  flex-shrink: 0;

  @media only screen and (max-width: 767px) {
    margin: 10px 0;
  }

  &.loggedUser {
    justify-content: flex-end;
  }
  .mateMessageGravatar {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    overflow: hidden;
    margin: 0px 20px;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .mateMessageContent {
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 110px);
    flex-shrink: 0;
    .mateMessageContentText {
      position: relative;
      font-size: 14px;
      vertical-align: top;
      display: inline-block;
      padding: 10px 15px;
      word-break: break-word;

      p {
        margin: 0;
      }
    }
    .mateMessageTime {
      font-size: 12px;
      color: #777777;
    }
    &.isUser {
      justify-content: flex-end;
      .mateMessageContentText {
        background: #2979ff;
        color: #ffffff;
        border-radius: 3px 0 3px 3px;

        &:after {
          content: '';
          position: absolute;
          border-style: solid;
          display: block;
          width: 0;
          top: 0;
          bottom: auto;
          left: auto;
          right: -9px;
          border-width: 0px 0 10px 10px;
          border-color: transparent #2979ff;
          margin-top: 0;
        }
      }
      .mateMessageTime {
        margin-left: auto;
      }
    }
    &.notUser {
      .mateMessageContentText {
        background: #f3f3f3;
        color: #424242;
        border-radius: 0 3px 3px 3px;

        &:after {
          content: '';
          position: absolute;
          border-style: solid;
          display: block;
          width: 0;
          top: 0;
          bottom: auto;
          left: -9px;
          border-width: 0px 10px 10px 0;
          border-color: transparent #f3f3f3;
          margin-top: 0;
        }
      }
      .mateMessageTime {
        margin-right: auto;
      }
    }
  }
`;
const ChatWindow = styled(Papersheet)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;

  @media only screen and (max-width: 767px) {
    > div {
      width: 100%;
      max-width: 100%;
    }
  }
`;
const ChatBox = styled.div`
  width: calc(100% - 300px);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const ChatSidebar = styled.div`
  flex-shrink: 0;
  border-right: 1px solid #e9e9e9;
  height: calc(100vh - 125px);
  background-color: #ffffff;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 1;
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr="#00ffffff",
        endColorstr="#ffffff",
        GradientType=0
      );
  }

  @media only screen and (max-width: 767px) {
    height: calc(100vh - 100px);
  }

  .UserListsWrapper {
    .messageHelperText {
      background: #ffffff;
      height: 100%;
      padding: 0 !important;
    }
  }
  .SidebarButtonsWrapper {
    padding: 20px;
    text-align: center;
    background: #ffffff;
    button {
      margin: 0;
      color: #ffffff;
      background: #303e9f;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;
const Button = styled(Buttons)`
  background-color: ${palette('indigo', 7)};
  color: #ffffff;
  width: calc(100% - 60px);
  margin-left: 30px;
  margin-top: 30px;
  &:hover {
    background-color: ${palette('indigo', 5)};
  }
  span {
    &:last-child {
      span {
        background-color: #ffffff;
      }
    }
  }
`;

const ComposeBtn = styled(Fab)`
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;

  ${Icon} {
    font-size: 21px;
  }
`;

const ComposeMessageWrapper = styled.div`
  background: #fafafa;
  flex-shrink: 0;
  padding: 20px 30px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }

  input {
    width: 100%;
  }
`;

const Dialog = styled(Dialogs)`
  .MessageDialog {
    position: relative;
    padding: 30px;
    width: 80vw;
    height: auto;
    box-sizing: border-box;

    > .material-icons {
      cursor: pointer;
      font-size: 14px;
      color: #777777;
      position: absolute;
      right: 10px;
      top: 10px;
    }

    h5 {
      margin-top: 0;
    }

    ${ComposeMessageWrapper} {
      background: transparent;
      padding: 0;
      border: 0;
      margin-top: 15px;
    }

    .sendMessageButton {
      display: flex;
      justify-content: flex-end;
      margin-top: 15px;
      button {
        width: auto;
        margin: 0;
      }
    }
  }
`;

const UserListsWrapper = styled.div`
  .UserListScrollbar {
    height: calc(100vh - 264px);

    @media only screen and (max-width: 767px) {
      height: calc(100vh - 234px);
    }
  }
`;
const UserLists = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  text-align: left;
  position: relative;
  margin: 0;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.25s ease;
  background-color: #fff;

  * {
    box-sizing: border-box;
  }

  &:hover {
    background-color: ${palette('grey', 1)};
  }

  .userListsGravatar {
    width: 50px;
    margin: 0 15px 0 0;
    flex-shrink: 0;
    img {
      border-radius: 50%;
    }
  }
  .userListsContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    h4 {
      font-size: 14px;
      margin: 0;
      font-weight: 500;
    }

    .chatExcerpt {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-top: 10px;

      p {
        color: ${palette('grey', 6)};
        margin: 0;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        display: inline-block;
      }

      .userListsTime {
        color: #bbbbbb;
        font-size: 10px;
        flex-shrink: 0;
      }
    }
  }
`;

const ToggleViewProfile = styled.div`
  background: #ffffff;
  height: 62px;
  flex-shrink: 0;
  padding-left: 30px;
  display: flex;
  align-items: center;

  > span {
    font-size: 17px;
    color: ${palette('grey', 8)};
    cursor: pointer;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 20px;

    ${Icon} {
      font-size: 16px;
      color: ${palette('grey', 8)};
      margin-right: 15px;
    }
  }
`;

const SidebarSearchBox = styled.div`
  padding: 15px 20px;
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
`;

const MessageChatWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 136px);
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  background: #ffffff;
  border-top: 1px solid #e9e9e9;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ChatViewWrapper = styled.div``;

const AddUserForm = styled.div``;

const AddUserDialog = styled(Dialogs)`
  .ModalTitle {
    padding: 15px 20px;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    color: ${palette('grey', 8)};
    border-bottom: 1px solid ${palette('grey', 3)};
  }

  ${AddUserForm} {
    padding: 20px;
    background-color: #ffffff;
    min-width: 350px;

    @media only screen and (max-width: 470px) {
      min-width: 0;
    }

    ${FormGroup} {
      &.btnWrapper {
        flex-direction: row;
        justify-content: space-between;
      }

      ${FormControl} {
        margin-bottom: 30px;
      }
    }

    ${DatePicker} {
      margin-top: 16px;
    }

    ${RadioGroup} {
      flex-direction: row;
      margin-bottom: 15px;

      @media only screen and (max-width: 370px) {
        flex-direction: column;
      }
    }

    ${InputLabel} {
      &.DOBLabel {
        top: auto;
        left: auto;
        position: relative;
        transform: translate(0, 0) scale(0.75);
      }
    }
  }
`;

export {
  MessageSingle,
  ChatWindow,
  ChatBox,
  ChatSidebar,
  Button,
  ComposeBtn,
  Icon,
  InputName,
  Input,
  Radio,
  RadioGroup,
  InputLabel,
  FormGroup,
  FormLabel,
  FormControl,
  ComposeMessageWrapper,
  UserLists,
  DatePicker,
  UserListsWrapper,
  ToggleViewProfile,
  SidebarSearchBox,
  MessageChatWrapper,
  ChatViewWrapper,
  ReactDrawer,
  LayoutWrapper,
  Dialog,
  AddUserDialog,
  AddUserForm,
};
