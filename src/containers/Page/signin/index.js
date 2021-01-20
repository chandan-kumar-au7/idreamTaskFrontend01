import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import signinImg from "../../../images/signup.svg";
import authAction from "../../../redux/auth/actions";
import IntlMessages from "../../../components/utility/intlMessages";
import Scrollbars from "../../../components/utility/customScrollBar";
import SignInStyleWrapper from "./signin.style";
import Firebase from "../../../helpers/firebase";
import FirebaseLogin from "../../../components/firebase";

import axios from "axios";

// refresh token
import { refreshTokenSetup } from "../../../utils/refreshToken";

import { GoogleLogin } from "react-google-login";

let returnedData;

const { login } = authAction;
class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    username: null,
    success: null,
    error: null,
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  responseGoogle = async (response) => {
    try {
      returnedData = await axios({
        method: "post",
        url: "http://localhost:4000/user/googlelogin",
        data: response,
      });
      console.log("returnedData ===>>> ", returnedData);

      // getting error if token got experied
      refreshTokenSetup(response);

      setTimeout(() => {
        this.state.success = null;
      }, 10000);
    } catch (error) {
      // console.log("Error while requesting backend => ", error.message);

      this.error = error.message;

      setTimeout(() => {
        this.state.error = null;
      }, 10000);
    }

    if (returnedData) {
      localStorage.setItem("loginToken", returnedData.data.Logintoken);
      this.success = returnedData.data.message;
      const userlogintoken = returnedData.data.Logintoken;

      this.props.history.push("/dashboard");
    }
  };

  handleLogin = () => {
    const { login } = this.props;
    const { username } = this.state;
    login({ username });
    this.props.history.push("/dashboard");
  };

  onChangeUsername = (event) => this.setState({ username: event.target.value });
  onChangePassword = (event) => this.setState({ password: event.target.value });
  render() {
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

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
              <div className="mateLoginOtherBtnWrap" onClick={this.handleLogin}>
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
                {Firebase.isValid && <FirebaseLogin login={this.handleLogin} />}
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
    isLoggedIn: state.Auth.idToken !== null ? true : false,
  }),
  { login }
)(SignIn);
