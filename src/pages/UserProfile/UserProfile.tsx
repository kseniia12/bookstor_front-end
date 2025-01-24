import React, { ChangeEvent, useState } from "react";
import { StylesWrapper } from "./style";
import buttonPhoto from "../../assets/button_photo.png";
import userPhoto from "../../assets/userPhoto.png";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  patchUserThunk,
  patchUserPasswordThunk,
  uploadPhotoThunk,
} from "../../store/thunk/thunkUser";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IGetUser, IResponsFormPassword } from "../../lib/typing";
import Button from "../../components/Button/Button";
import FormPersonalInformation from "../../components/FormPersonalInformation/FormPersonalInformation";
import FormPassword from "../../components/FormPassword/FormPassword";

const UserProfile = () => {
  const user = useAppSelector((state) => state.users.user);
  const [isEditable, setIsEditable] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [activeForm, setActiveForm] = useState<null | string>(null);

  const { register, handleSubmit } = useForm<IGetUser>();

  const lastSegmentPathUserPhoto = user.photo ? user.photo.split("/").pop() : null;
  const foto = lastSegmentPathUserPhoto === "null" ? userPhoto : user.photo;

  const dispatch = useAppDispatch();
  const {
    watch,
    register: registerPassword,
    formState: { errors },
    handleSubmit: handleSubmitPassword,
  } = useForm<IResponsFormPassword>();

  const onSubmit: SubmitHandler<IGetUser> = async (data) => {
    await dispatch(patchUserThunk({ user: data.user })).unwrap();
    setIsEditable(false);
  };

  const onSubmitForPassword: SubmitHandler<IResponsFormPassword> = async (
    data
  ) => {
    console.log("onSubmitForPassword", data)
    try {
      await dispatch(
        patchUserPasswordThunk({ user: data.user})
      ).unwrap();
    } catch (error) {
      console.error("The old password was entered incorrectly", error);
    }
  };

  const handleUpdateAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const photo = e.target.files?.[0];
    if (photo) {
      try {
        await dispatch(uploadPhotoThunk({ photo })).unwrap();
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
        <img src={foto} alt="Logo" className="avatar__image" />
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
          <FormPersonalInformation
            handleEditClick={handleEditClick}
            register={register}
          />
          <FormPassword
            registerPassword={registerPassword}
            errors={errors}
            watch={watch}
            handleEditClick1={handleEditClick1}
          />
          {activeForm && <Button className="button" text="Confirm" />}
        </form>
      </div>
    </StylesWrapper>
  );
};

export default UserProfile;