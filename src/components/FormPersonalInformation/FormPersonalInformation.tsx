import React from "react";
import emailIcon from "../../assets/email.png";
import userProfile from "../../assets/userProfile.png";
import Input from "../Input/Input";
import { useAppSelector } from "../../hooks";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "../../lib/types/types";

interface User {
  fullName: string;
  email: string;
}

interface ChangePasswordFormProps {
  handleEditClickPersonalInformation: () => void;
  register: UseFormRegister<{
    user: User;
  }>;
}

const FormPersonalInformation: React.FC<ChangePasswordFormProps> = ({
  handleEditClickPersonalInformation,
  register,
}) => {
  const user = useAppSelector((state) => state.users.user) as IUser;
  return (
    <div className="form__section">
      <div className="form__header">
        <div className="normal-title">Personal information</div>
        <div
          className="form__editing"
          onClick={handleEditClickPersonalInformation}
        >
          Change information
        </div>
      </div>
      <Input
        type="text"
        className="form__input-info"
        placeholder="Your name"
        icon={userProfile}
        register={register("user.fullName")}
        value={user.fullName}
      />
      <Input
        type="email"
        className="form__input-info"
        icon={emailIcon}
        placeholder="Your email"
        register={register("user.email")}
        value={user.email}
      />
    </div>
  );
};
export default FormPersonalInformation;
