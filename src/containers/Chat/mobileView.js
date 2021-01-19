import React, { Component } from "react";
import { connect } from "react-redux";
// import InputName from '../../components/chat/inputName';
import ChatRooms from "./chatrooms";
import Messages from "./messages";
import ComposeMessage from "./composMessage";
import ViewProfile from "../../components/chat/viewProfile";
import Loader from "../../components/utility/Loader";
import {
  ChatWindow,
  ChatBox,
  ChatSidebar,
  InputName,
  LayoutWrapper,
  ToggleViewProfile,
  Dialog,
  Icon
} from "./message.style";

import actions from "../../redux/chat/actions";

class MobileView extends Component {
  componentDidMount() {
    const { users, userId, chatInit } = this.props;
    if (!users) {
      chatInit(userId);
    }
  }
  render() {
    const {
      loading,
      users,
      viewProfile,
      toggleCompose,
      openCompose,
      setComposedId,
      selectedChatRoom,
      toggleViewProfile,
      mobileActiveList,
      mobileActiveProfile,
      toggleMobileList,
      toggleMobileProfile
    } = this.props;
    if (loading) {
      return <Loader />;
    }
    let CurrentView = <Loader />;
    if (mobileActiveList) {
      CurrentView = (
        <ChatSidebar>
          <Dialog open={openCompose} onClose={toggleCompose}>
            <div className="MessageDialog">
              <Icon onClick={toggleCompose}>close</Icon>
              <h5>Starting your chat with...</h5>
              <InputName
                users={users}
                setComposedId={setComposedId}
                fullWidth
              />
              <ComposeMessage showButton rows={6} />
            </div>
          </Dialog>
          <ChatRooms toggleMobileList={toggleMobileList} />
        </ChatSidebar>
      );
    } else if (mobileActiveProfile) {
      CurrentView = (
        <ViewProfile
          viewProfile={viewProfile}
          toggleViewProfile={toggleViewProfile}
          toggleMobileProfile={toggleMobileProfile}
        />
      );
    } else {
      CurrentView = (
        <ChatBox>
          <ToggleViewProfile>
            <Icon onClick={() => toggleMobileList(true)}>
              keyboard_arrow_left
            </Icon>
            {selectedChatRoom && (
              <span
                onClick={() => {
                  toggleViewProfile(selectedChatRoom.otherUserInfo);
                  toggleMobileProfile(true);
                }}
              >
                {selectedChatRoom.otherUserInfo.name}
              </span>
            )}
          </ToggleViewProfile>

          <Messages toggleMobileProfile={toggleMobileProfile} />

          <ComposeMessage
            InputProps={{
              disableUnderline: true
            }}
          />
        </ChatBox>
      );
    }
    return (
      <LayoutWrapper style={{ height: "100%" }}>
        <ChatWindow>{CurrentView}</ChatWindow>
      </LayoutWrapper>
    );
  }
}
function mapStateToProps(state) {
  return state.Chat;
}
export default connect(mapStateToProps, actions)(MobileView);
