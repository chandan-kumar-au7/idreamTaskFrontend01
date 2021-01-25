import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import signinImg from "../../../images/signup.svg";
import authAction from "../../../redux/auth/actions";
import IntlMessages from "../../../components/utility/intlMessages";
import Scrollbars from "../../../components/utility/customScrollBar";
import SignInStyleWrapper from "./signin.style";
import Firebase from "../../../helpers/firebase";
import FirebaseLogin from "../../../components/firebase";
import Auth0 from "../../../helpers/auth0";
import { notification } from "../../../components";

import axios from "axios";

// refresh token
// import { refreshTokenSetup } from "../../../utils/refreshToken";

import { GoogleLogin } from "react-google-login";

let returnedData;

const { login } = authAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    username: null,
    success: null,
    error: null,
    isAuthenticated: false,
  };

  responseGoogle = async (response) => {
    try {
      returnedData = await axios({
        method: "post",
        url: "http://localhost:4000/user/googlelogin",
        data: response,
      });
      if (returnedData.data.Logintoken) {
        console.log("returnedData_/signin_Page ===>>> ", returnedData);
        Auth0.handleAuthentication(returnedData.data.Logintoken);
      }

      // getting error if token got experied
      // refreshTokenSetup(response);

      setTimeout(() => {
        this.state.success = null;
      }, 10000);
    } catch (error) {
      // console.log("Error while requesting backend => ", error.message);

      this.error = error.message;
      notification("error", error.message);

      setTimeout(() => {
        this.state.error = null;
      }, 10000);
    }
  };

  onChangeUsername = (event) => this.setState({ username: event.target.value });
  onChangePassword = (event) => this.setState({ password: event.target.value });

  render() {
    return (
      <SignInStyleWrapper className="mateSignInPage">
        <div className="mateSignInPageImgPart">
          <div className="mateSignInPageImg">
            <img src={signinImg} alt="Kiwi standing on oval" />
          </div>
        </div>

        <div className="mateSignInPageContent">
          <div className="mateSignInPageLink">
            <Link to="#">
              <button className="mateSignInPageLinkBtn active" type="button">
                Login
              </button>
            </Link>
          </div>
          <Scrollbars style={{ height: "100%" }}>
            <div className="mateSignInPageGreet">
              <h1>Hello User,</h1>
              <p>
                Welcome to Mate Admin, Please Login with your personal account
                information.
              </p>
            </div>

            <div className="mateLoginSubmitText">
              <span>
                * Username Demo@gmail.com, password , demo and click on any
                button.
              </span>
            </div>
            <div className="mateLoginOtherBtn">
              <div className="mateLoginOtherBtnWrap">
                <GoogleLogin
                  className="btnGooglePlus"
                  clientId="472028388531-pbk8thqe6nr57vmu9hisuh85s4j1vdsd.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                >
                  <IntlMessages id="page.signInGooglePlus" />
                </GoogleLogin>
              </div>

              <div className="mateLoginOtherBtnWrap">
                {Firebase.isValid && <FirebaseLogin />}
              </div>
            </div>
            {this.state.error !== null && (
              <div style={{ color: "red", marginTop: "10px" }}>
                *{this.state.error}
              </div>
            )}
            {this.state.success !== null && (
              <div style={{ color: "green", marginTop: "10px" }}>
                *{this.state.success}
              </div>
            )}
          </Scrollbars>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  (state) => ({
    isLoggedIn: state.Auth.loginToken !== null ? true : false,
  }),
  { login }
)(SignIn);
