import React, { ChangeEvent, useState } from "react";
import Input from "../Input/Input";
import { StylesWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import userProfile from "../../img/userProfile.png";
import buttonPhoto from "../../img/button_photo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  thunkPatchUser,
  thunkPatchUserPassword,
  thunkUploadPhoto,
} from "../../store/thunk/thunkUser";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IGetUser, IResponsFormPassword } from "../../lib/typing";
import Button from "../Button/Button";
function UserProfile() {
  let imgProfile = useAppSelector((state) => state.users.user.photo);
  const email = useAppSelector((state) => state.users.user.email);
  const name = useAppSelector((state) => state.users.user.fullName);
  const [isEditable, setIsEditable] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const token = localStorage.getItem("token");
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<IGetUser>();

  const {
    watch,
    register: registerPassword,
    formState: { errors, touchedFields },
    handleSubmit: handleSubmitPassword,
  } = useForm<IResponsFormPassword>();
  const password = watch("user.newPassword");
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IGetUser> = async (data) => {
    
    await dispatch(thunkPatchUser({ user: data.user, token })).unwrap();
    setIsEditable(false);
  };

  const onSubmitForPassword: SubmitHandler<IResponsFormPassword> = async (
    data
  ) => {
    await dispatch(thunkPatchUserPassword({ user: data.user, token })).unwrap();
  };

  const handleUpdateAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const photo = e.target.files?.[0];
    if (photo) {
      try {
        await dispatch(thunkUploadPhoto({ photo })).unwrap();
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    }
  };
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };
  
  const handleEditClick1 = () => {
    setChangePassword(!changePassword);
  };


  return (
    <StylesWrapper isEditable={isEditable} changePassword={changePassword}>
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
      <div className="user-profile">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-profile__section">
            <div className="user-profile__header">
              <div>Personal information</div>
              <div className="d" onClick={handleEditClick}>
                Change information
              </div>
            </div>
            <Input
              className="user-profile__input"
              placeholder="Your name"
              icon={userProfile}
              register={register("user.fullName")}
              value={name}
            />
            <Input
              className="user-profile__input"
              icon={emailIcon}
              placeholder="Your email"
              register={register("user.email")}
              value={email}
            />
          </div>
          <Button className="button" text="Confirm" />
        </form>
        <form onSubmit={handleSubmitPassword(onSubmitForPassword)}>
          <div className="user-profile__section">
            <div className="user-profile__header">
              <div>Password</div>
              <div className="d" onClick={handleEditClick1}>Change password</div>
            </div>
            <Input
              className="user-profile1__input"
              placeholder="Your password"
              icon={searchIcon}
              register={registerPassword("user.password")}
            />
            <div className="item">
              <Input
                className="user-profile1__input"
                icon={searchIcon}
                placeholder="New password"
                register={registerPassword("user.newPassword")}
              />
              <div>Enter your password</div>
            </div>
            <div className="item">
              <Input
                className="user-profile1__input"
                icon={searchIcon}
                placeholder="Password replay"
                register={registerPassword("user.passwordReplay", {
                  required: "Password replay is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <div>Repeat your password without errors</div>
              {errors.user?.passwordReplay && (
                <div>{errors.user.passwordReplay.message}</div>
              )}
            </div>
          </div>
          <Button className="button1" text="Confirm" />
        </form>
      </div>
    </StylesWrapper>
  );
}

export default UserProfile;
