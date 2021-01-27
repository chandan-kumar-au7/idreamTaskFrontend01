// import Auth0Lock from "auth0-lock";
import history from "./history";
import { Auth0Config } from "../../settings";
import { notification } from "../../components";

class Auth0Helper {
  isValid = Auth0Config.clientID && Auth0Config.domain;

  constructor() {
    // this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication(props) {
    // console.log("this is the props ==>> ", props);

    localStorage.setItem("id_token", props);
    history.push("/dashboard");
  }

  logout(props) {
    localStorage.removeItem(props);
    notification("success", "Logged Out SuccessFully");
    history.push("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < JSON.parse(localStorage.getItem("id_token"));
  }
}
export default new Auth0Helper();
