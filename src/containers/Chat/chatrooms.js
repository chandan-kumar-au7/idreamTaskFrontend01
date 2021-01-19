import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddNewUser from './addNewUser';
import InputSearch from '../../components/uielements/inputSearch';
import actions from '../../redux/chat/actions';
import { timeDifference } from '../../helpers/utility';
import HelperText from '../../components/utility/helper-text';
import Scrollbars from '../../components/utility/customScrollBar';
import {
  ChatSidebar,
  ComposeBtn,
  UserLists,
  SidebarSearchBox,
  UserListsWrapper,
  Icon,
} from './message.style';
const { setSelectedChatroom, toggleCompose } = actions;

class ChatRooms extends Component {
  state = {
    value: '',
    searchedChatRooms: this.props.chatRooms,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ value: '', searchedChatRooms: nextProps.chatRooms });
  }
  onSearch = value => {
    const searchedChatRooms = value ? [] : this.props.chatRooms;
    if (value) {
      this.props.chatRooms.forEach(chatRoom => {
        if (
          chatRoom.otherUserInfo.name
            .toLowerCase()
            .includes(value.toLowerCase())
        ) {
          searchedChatRooms.push(chatRoom);
        }
      });
    }
    this.setState({ value, searchedChatRooms });
  };
  render() {
    const {
      users,
      setSelectedChatroom,
      selectedChatRoom,
      toggleMobileList,
      toggleCompose,
    } = this.props;
    const { value, searchedChatRooms } = this.state;
    const singleChatRoom = (chatRoom, index) => {
      const { otherUserInfo, lastMessage, lastMessageTime } = chatRoom;
      const { name, profileImageUrl } = otherUserInfo;
      const selected = selectedChatRoom.id === chatRoom.id;
      const style = {
        background: selected ? '#f7f7f7' : '',
        // margin: '2px 2px 2px 0',
      };
      const selectChatroom = event => {
        event.stopPropagation();
        if (!selected) {
          setSelectedChatroom(chatRoom);
        }
        if (toggleMobileList) {
          toggleMobileList(false);
        }
      };
      return (
        <UserLists key={index} style={style} onClick={selectChatroom}>
          <div className="userListsGravatar">
            <img
              alt="#"
              style={{ width: 45, height: 45 }}
              src={profileImageUrl}
            />
          </div>
          <div className="userListsContent">
            <h4>{name}</h4>
            <div className="chatExcerpt">
              <p>{lastMessage}</p>
              <span className="userListsTime">
                {timeDifference(lastMessageTime)}
              </span>
            </div>
          </div>
        </UserLists>
      );
    };
    return (
      <ChatSidebar>
        <SidebarSearchBox>
          <InputSearch
            defaultValue={value}
            onChange={this.onSearch}
            placeholder="Search Contact"
            alwaysDefaultValue
            disableUnderline
            fullWidth
          />
        </SidebarSearchBox>
        <div className="SidebarButtonsWrapper">
          <AddNewUser />

          {users.length > 0 && (
            <ComposeBtn onClick={toggleCompose} color="primary">
              <Icon>create</Icon>
            </ComposeBtn>
          )}
        </div>
        <UserListsWrapper>
          <Scrollbars className="UserListScrollbar">
            {searchedChatRooms.length === 0 ? (
              <HelperText
                text="No Conversation"
                className="messageHelperText"
              />
            ) : (
              searchedChatRooms.map(singleChatRoom)
            )}
          </Scrollbars>
        </UserListsWrapper>
      </ChatSidebar>
    );
  }
}
function mapStateToProps(state) {
  const { users, chatRooms, openCompose } = state.Chat;
  return {
    users,
    chatRooms: chatRooms.filter(chatRoom => chatRoom.lastMessageTime > 0),
    selectedChatRoom: {},
    openCompose,
  };
}
export default connect(
  mapStateToProps,
  {
    setSelectedChatroom,
    toggleCompose,
  }
)(ChatRooms);
