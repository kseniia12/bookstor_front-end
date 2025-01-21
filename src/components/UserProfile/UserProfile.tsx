import React, { ChangeEvent, useState } from "react";
import Input from "../Input/Input";
import { StylesWrapper } from "./style";
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

const UserProfile = () => {
  const user = useAppSelector((state) => state.users.user);
  const [isEditable, setIsEditable] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [activeForm, setActiveForm] = useState<null | string>(null);
  const token = localStorage.getItem("token");
  const { register, handleSubmit } = useForm<IGetUser>();

  const dispatch = useAppDispatch();
  const {
    watch,
    register: registerPassword,
    formState: { errors },
    handleSubmit: handleSubmitPassword,
  } = useForm<IResponsFormPassword>();

  const password = watch("user.newPassword");

  const onSubmit: SubmitHandler<IGetUser> = async (data) => {
    await dispatch(thunkPatchUser({ user: data.user, token })).unwrap();
    setIsEditable(false);
  };

  const onSubmitForPassword: SubmitHandler<IResponsFormPassword> = async (
    data
  ) => {
    try {
      await dispatch(
        thunkPatchUserPassword({ user: data.user, token })
      ).unwrap();
    } catch (error) {
      console.error("The old password was entered incorrectly", error);
    }
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
    setActiveForm(isEditable ? null : "profile");
  };

  const handleEditClick1 = () => {
    setChangePassword(!changePassword);
    setActiveForm(changePassword ? null : "password");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeForm === "profile") {
      handleSubmit(onSubmit)();
    } else if (activeForm === "password") {
      handleSubmitPassword(onSubmitForPassword)();
    }
  };

  return (
    <StylesWrapper isEditable={isEditable} changePassword={changePassword}>
      <div className="avatar">
        <img src={user.photo} alt="Logo" className="avatar__image" />
        <label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg, image/jpg"
            multiple
            style={{ display: "none" }}
            onChange={handleUpdateAvatar}
          />
          <img src={buttonPhoto} alt="Logo" className="avatar__icon" />
        </label>
      </div>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="form__section">
            <div className="form__header">
              <div>Personal information</div>
              <div className="form__editing" onClick={handleEditClick}>
                Change information
              </div>
            </div>
            <Input
              type="text"
              className="form__input info"
              placeholder="Your name"
              icon={userProfile}
              register={register("user.fullName")}
              value={user.fullName}
            />
            <Input
              type="email"
              className="form__input info"
              icon={emailIcon}
              placeholder="Your email"
              register={register("user.email")}
              value={user.email}
            />
          </div>
          <div className="form__section">
            <div className="form__header">
              <div>Password</div>
              <div className="form__editing" onClick={handleEditClick1}>
                Change password
              </div>
            </div>
            <Input
              type="password"
              className="form__input password"
              placeholder="Your password"
              icon={searchIcon}
              register={registerPassword("user.password")}
            />
            <div className="item">
              <Input
                type="password"
                className="form__input password"
                icon={searchIcon}
                placeholder="New password"
                register={registerPassword("user.newPassword")}
              />
              <div>Enter your password</div>
            </div>
            <div className="item">
              <Input
                type="password"
                className="form__input password"
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
          {activeForm && <Button className="button" text="Confirm" />}
        </form>
      </div>
    </StylesWrapper>
  );
};

export default UserProfile;
