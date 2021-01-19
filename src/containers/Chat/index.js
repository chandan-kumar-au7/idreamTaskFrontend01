import React, { Component } from "react";
import { connect } from "react-redux";
import DesktopView from "./desktopView";
import MobileView from "./mobileView";
import { ChatViewWrapper } from "./message.style";
import FirebaseHelper from "../../helpers/firebase";
import HelperText from "../../components/utility/helper-text";
import NoAPIKey from "../../images/NoAPIKey.svg";

class Chat extends Component {
  render() {
    const { view, scrollHeight, height } = this.props;
    const ChatView = view === "MobileView" ? MobileView : DesktopView;
    return (
      <ChatViewWrapper style={{ height: scrollHeight }}>
        {FirebaseHelper.isValid ? (
          <ChatView height={height} view={view} />
        ) : (
            <HelperText
              imgSrc={NoAPIKey}
              text="Please Enter Your API Key in the `src/settings/index.js`"
            />
          )}
      </ChatViewWrapper>
    );
  }
}

export default connect(state => ({
  ...state.App,
  scrollHeight: state.App.scrollHeight
}))(Chat);
