import React from "react";
import Input from "../Input/Input";
import { StylesWrapper } from "./style";
import { Link } from "react-router-dom";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgProfile from "../../img/img-profile.png";
import userProfile from "../../img/userProfile.png";
import buttonPhoto from "../../img/button_photo.png";
function UserProfile() {
  return (
    <StylesWrapper>
      <div className="icon">
        <img src={imgProfile} alt="Logo"  className="icon__profile"/>
        <img src={buttonPhoto} alt="Logo" className="icon__photo" />
      </div>
      <div className="user-profile">
        <div className="user-profile__section">
          <div className="user-profile__header">
            <div>Personal information</div>
            <Link className="user-profile__link" to="/products">
              Change information
            </Link>
          </div>
          <Input
            className="user-profile__input"
            placeholder="Your name"
            icon={userProfile}
          />
          <Input
            className="user-profile__input"
            placeholder="Your email"
            icon={emailIcon}
          />
        </div>
        <div className="user-profile__section">
          <div className="user-profile__header">
            <div>Password</div>
            <Link className="user-profile__link" to="/products">
              Change password
            </Link>
          </div>

          <Input
            className="user-profile__input"
            placeholder="Your password"
            icon={searchIcon}
          />
        </div>
      </div>
    </StylesWrapper>
  );
}

export default UserProfile;
