import React from "react";
import "./css/UserDetails.css";

function UserDetails({ userDetails }) {
  return (
    <div className="user-details">
      <div className="user-avatar-bio">
        <img
          src={userDetails.avatar_url}
          className="user-details-avatar"
          alt="avatar"
        />
        <div className="user-details-bio">
          <center>{userDetails.bio}</center>
        </div>
      </div>

      <div className="user-details-info">
        <span className="user-details-info-name">
          <h2>{userDetails.name}</h2>
        </span>
        <div className="user-details-items">
          <span>
            <img
              className="user-details-items-img"
              src="https://img.icons8.com/ios-filled/32/ffffff/marker.png"
            />
          </span>
          <span>{userDetails.location}</span>
        </div>
        <div className="user-details-items">
          <span>
            <img
              className="user-details-items-img"
              src="https://img.icons8.com/ios-glyphs/32/ffffff/github.png"
            />
          </span>
          <a
            rel="noopener noreferrer"
            target="_BLANK"
            className="htmlUrl"
            href={userDetails.html_url}
          >
            @{userDetails.login}
          </a>
        </div>

        <div className="user-details-items">
          <span>
            <img
              className="user-details-items-img"
              src="https://img.icons8.com/ios/32/ffffff/domain.png"
            />
          </span>
          <a
            rel="noopener noreferrer"
            target="_BLANK"
            className="htmlUrl"
            href={userDetails.blog}
          >
            {userDetails.blog}
          </a>
        </div>
        <div className="user-details-items">
          <span>
            <img
              className="user-details-items-img"
              src="https://img.icons8.com/ios-filled/32/ffffff/twitter.png"
            />
          </span>
          <a
            href={`https://twitter.com/${userDetails.twitter_username}`}
            className="htmlUrl"
          >
            @{userDetails.twitter_username}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
