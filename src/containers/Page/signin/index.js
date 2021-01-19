import React, { useState } from "react";
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

const responseGoogle = async (response) => {
  // console.log(" data ===>>> ", response.profileObj);

  refreshTokenSetup(response);

  returnedData = await axios({
    method: "post",
    url: "http://localhost:4000/user/googlelogin",
    data: response,
  });

  console.log("returnedData ===>>> ", returnedData);

  if (returnedData) {
    localStorage.setItem("loginToken", returnedData.data.Logintoken);
  }
};

const { login } = authAction;

const SignIn = () => {
  const [redirectToReferrer] = useState(false);

  // let history = useHistory();

  // const [username, setusername] = useState("demo@gmail.com");
  // const [password, setpassword] = useState("demodemo");

  // const handleLogin = () => {
  //   console.log("clicked");
  // };

  const from = { pathname: "/dashboard" };

  // useEffect(() => {
  // const userLoginToken = localStorage.getItem("loginToken");
  // if (userLoginToken) {
  //   setredirectToReferrer(true);
  // }
  // }, []);

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
            <div
              className="mateLoginOtherBtnWrap"
              // onClick={handleLogin}
            >
              <GoogleLogin
                className="btnGooglePlus"
                clientId="472028388531-pbk8thqe6nr57vmu9hisuh85s4j1vdsd.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <IntlMessages id="page.signInGooglePlus" />
              </GoogleLogin>
            </div>

            <div className="mateLoginOtherBtnWrap">
              {Firebase.isValid && <FirebaseLogin login={this.handleLogin} />}
            </div>
          </div>
        </Scrollbars>
      </div>
    </SignInStyleWrapper>
  );
};
export default connect(
  (state) => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false,
  }),
  { login }
)(SignIn);
