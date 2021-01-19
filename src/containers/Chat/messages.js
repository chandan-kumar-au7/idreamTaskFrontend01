import React, { Component } from "react";
import { connect } from "react-redux";
import { timeDifference } from "../../helpers/utility";
import HelperText from "../../components/utility/helper-text";
import actions from "../../redux/chat/actions";
import { MessageSingle, MessageChatWrapper } from "./message.style";

class Messages extends Component {
  scrollToBottom = () => {
    const messageChat = document.getElementById("messageChat");
    messageChat.scrollTop = messageChat.scrollHeight;
  };
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const {
      user,
      userId,
      selectedChatRoom,
      messages,
      toggleViewProfile,
      toggleMobileProfile
    } = this.props;
    const renderMessage = message => {
      const isUser = userId === message.sender;
      const messageUser = isUser ? user : selectedChatRoom.otherUserInfo;
      if (isUser) {
        return (
          <MessageSingle className="loggedUser" key={message.messageTime}>
            <div className="mateMessageContent isUser">
              <div className="mateMessageContentText">
                <p>{message.text}</p>
              </div>
              <div className="mateMessageTime">
                <p>{timeDifference(message.messageTime)}</p>
              </div>
            </div>
            <div className="mateMessageGravatar">
              <img
                alt="#"
                src={messageUser.profileImageUrl}
                onClick={() => {
                  toggleMobileProfile(true);
                  toggleViewProfile(messageUser);
                }}
              />
            </div>
          </MessageSingle>
        );
      } else {
        return (
          <MessageSingle key={message.messageTime}>
            <div className="mateMessageGravatar">
              <img
                alt="#"
                src={messageUser.profileImageUrl}
                onClick={() => {
                  toggleMobileProfile(true);
                  toggleViewProfile(messageUser);
                }}
              />
            </div>
            <div className="mateMessageContent notUser">
              <div className="mateMessageContentText">
                <p>{message.text}</p>
              </div>
              <div className="mateMessageTime">
                <p>{timeDifference(message.messageTime)}</p>
              </div>
            </div>
          </MessageSingle>
        );
      }
    };
    return (
      <MessageChatWrapper id="messageChat">
        {messages.map(renderMessage)}
        {messages.length === 0 && (
          <HelperText text="No Messages" className="messageHelperText" />
        )}
      </MessageChatWrapper>
    );
  }
}
function mapStateToProps(state) {
  const { user, userId, selectedChatRoom, messages } = state.Chat;
  return {
    user,
    userId,
    selectedChatRoom,
    messages
  };
}
export default connect(mapStateToProps, actions)(Messages);
