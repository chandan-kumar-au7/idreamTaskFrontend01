import React, { Component } from "react";
import { connect } from "react-redux";
import Scrollbars from "../../../components/utility/customScrollBar";
import actions from "../../../redux/instagramWidget/actions";
import {
  InstagramWidget,
  UserInformation,
  UserAction,
  Media,
  MediaItem
} from "./style";
import HelperText from "../../../components/utility/helper-text";
import NoAPIKey from "../../../images/NoAPIKey.svg";
const { getUserData } = actions;

class InstagramFeed extends Component {
  componentWillMount() {
    this.props.getUserData();
  }

  render() {
    const { userData, stretched } = this.props;
    const profilePicUrl =
      userData && userData.info ? userData.info.profile_picture : null;
    const showMedia = (item, index) => {
      const imageUrl = item.images.thumbnail.url;
      return (
        <MediaItem key={index}>
          <img alt="#" src={imageUrl} />
        </MediaItem>
      );
    };
    return (
      <InstagramWidget stretched={stretched}>
        {userData == null || (!userData.info && !userData.media) ? (
          <HelperText
            imgSrc={NoAPIKey}
            text="Please Enter Your API Key in the `src/settings/index.js`"
          />
        ) : (
            <div>
              <UserInformation>
                <h3>
                  {userData && userData.info ? userData.info.full_name : null}
                </h3>
                {userData && userData.info ? (
                  <p>@{userData.info.username}</p>
                ) : null}
              </UserInformation>

              <UserAction>
                <div className="profilePicture">
                  <img alt="#" src={profilePicUrl} />
                </div>

                <div className="mediaCounter">
                  <div className="mediaCounterItem">
                    <h5>
                      {userData && userData.info
                        ? userData.info.counts.media
                        : "0"}
                    </h5>
                    <p>Images</p>
                  </div>

                  <div className="mediaCounterItem">
                    <h5>
                      {userData && userData.info
                        ? userData.info.counts.followed_by
                        : "0"}
                    </h5>
                    <p>Followers</p>
                  </div>

                  <div className="mediaCounterItem">
                    <h5>
                      {userData && userData.info
                        ? userData.info.counts.follows
                        : "0"}
                    </h5>
                    <p>Following</p>
                  </div>
                </div>
              </UserAction>

              <Scrollbars style={{ height: 150 }}>
                <Media>
                  {userData && userData.media && userData.media.length
                    ? userData.media.map(showMedia)
                    : null}
                </Media>
              </Scrollbars>
            </div>
          )}
      </InstagramWidget>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.InstagramWidget.userData,
    loading: state.InstagramWidget.loading
  };
}
export default connect(mapStateToProps, { getUserData })(InstagramFeed);
