import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input/Input";
import { StylesWrapper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgProfile from "../../img/img-profile.png";
import userProfile from "../../img/userProfile.png";
import buttonPhoto from "../../img/button_photo.png";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { thunkUploadPhoto } from "../../store/thunk/thunkUser";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IFormInput } from "../../lib/typing";
function UserProfile() {
  
  let imgProfile = useAppSelector((state) => state.users.user.photo);
  const mail = useAppSelector((state) => state.users.user.email);
  const name = useAppSelector((state) => state.users.user.fullName);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const user = await dispatch(thunkCreateUser(data)).unwrap();
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      navigate("/auth/sign-in");
    }
  };


  const handleUpdateAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const photo = e.target.files?.[0];
    if (photo) {
      try {
        const response = await dispatch(thunkUploadPhoto({ photo })).unwrap();
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    }
  };

  return (
    <StylesWrapper>
      <div className="icon">
        <img src={imgProfile} alt="Logo" className="icon__profile" />
        <label className="avatar-button">
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg, image/jpg"
            multiple
            style={{ display: "none" }}
            onChange={handleUpdateAvatar}
          />
          <img src={buttonPhoto} alt="Logo" className="icon__photo" />
        </label>
      </div>
      <form className="user-profile" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-profile__section">
          <div className="user-profile__header">
            <div>Personal information</div>
            <Link className="user-profile__link" to="/products">
              Change information
            </Link>
          </div>
          <Input
            className="user-profile__input"
            placeholder={name}
            icon={userProfile}
          />
          <Input
            className="user-profile__input"
            icon={emailIcon}
            value={mail}
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
      </form>
    </StylesWrapper>
  );
}

export default UserProfile;
