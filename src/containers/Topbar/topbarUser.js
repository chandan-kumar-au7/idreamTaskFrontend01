import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IntlMessages from "../../components/utility/intlMessages";
import TopbarDropdownWrapper from "./topbarDropdown.style";
import {
  IconButtons,
  TopbarDropdown,
  UserInformation,
  SettingsList,
  Icon,
} from "./topbarDropdown.style";
import authAction from "../../redux/auth/actions";
import Image from "../../images/user.jpg";

const { logout } = authAction;

class TopbarUser extends Component {
  state = {
    visible: false,
    anchorEl: null,
    userImage: "",
    userEmail: "",
    userName: "",
  };
  hide = () => {
    this.setState({ visible: false });
  };
  handleVisibleChange = () => {
    this.setState({
      visible: !this.state.visible,
      anchorEl: findDOMNode(this.button),
    });
  };

  componentDidMount() {
    // if (this.props.userData !== undefined) {
    setTimeout(() => {
      this.setState({
        userImage: this.props.userData.imageUrl,
        userEmail: this.props.userData.email,
        userName: this.props.userData.name,
      });
    }, 2000);
    // }
  }

  render() {
    console.log("this.props in topbar.js", this.props);
    const content = (
      <TopbarDropdown style={{ width: "auto" }}>
        <UserInformation>
          <div className="userImage">
            {this.state.userImage === "" ? (
              <img src={Image} alt="user" />
            ) : (
              <img src={this.state.userImage} alt="user" />
            )}
          </div>

          <div className="userDetails">
            {this.state.userEmail === "" ? (
              <h3>{"Hello User"}</h3>
            ) : (
              <>
                <p>{this.state.userName}</p>
                <h3>{this.state.userEmail}</h3>
              </>
            )}
          </div>
        </UserInformation>

        <SettingsList>
          <a href="#!" className="dropdownLink">
            <Icon>settings</Icon>
            <IntlMessages id="themeSwitcher.settings" />
          </a>
          <a href="#!" className="dropdownLink">
            <Icon>help</Icon>
            <IntlMessages id="sidebar.feedback" />
          </a>
          <a href="#!" className="dropdownLink">
            <Icon>feedback</Icon>
            <IntlMessages id="topbar.help" />
          </a>
          <Link to="/" onClick={this.props.logout} className="dropdownLink">
            <Icon>input</Icon>
            <IntlMessages id="topbar.logout" />
          </Link>
        </SettingsList>
      </TopbarDropdown>
    );
    return (
      <div id="topbarUserIcon">
        <IconButtons
          ref={(node) => {
            this.button = node;
          }}
          onClick={this.handleVisibleChange}
        >
          <div className="userImgWrapper">
            {this.state.userImage === "" ? (
              <img src={Image} alt="user" />
            ) : (
              <img src={this.state.userImage} alt="user" />
            )}
          </div>
        </IconButtons>

        <TopbarDropdownWrapper
          open={this.state.visible}
          anchorEl={this.state.anchorEl}
          onClose={this.hide}
          // marginThreshold={66}
          className="userPopover"
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          {content}
        </TopbarDropdownWrapper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(
  //   "redux state_src/_sec/containers/AppPage/Topbar/topbarUser.js ----- ",
  //   state
  // );
  return {
    customizedTheme: state.ThemeSwitcher.topbarTheme,
    // userImage: state.Auth.loggedInUserData.imageUrl,
    userData: state.Auth.loggedInUserData,
  };
}

export default connect(mapStateToProps, { logout })(TopbarUser);
