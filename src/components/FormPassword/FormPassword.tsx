import React from "react";
import Input from "../Input/Input";
import searchIcon from "../../assets/hide.png";

interface ChangePasswordFormProps {
  registerPassword: any;
  errors: any;
  watch: any;
  handleEditClickPassword: any;
}

const FormPassword: React.FC<ChangePasswordFormProps> = ({
  registerPassword,
  errors,
  watch,
  handleEditClickPassword,
}) => {
  const password = watch("user.newPassword");
  return (
    <div className="form__section">
      <div className="form__header password">
        <div>Password</div>
        <div className="form__editing" onClick={handleEditClickPassword}>
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
          register={registerPassword("user.newPassword", {
            required: "This field is required",
          })}
        />
        <div
          className={`item__text ${errors.user?.newPassword ? "error" : ""}`}
        >
          {errors.user?.newPassword
            ? errors.user.newPassword.message
            : "Repeat your password without errors"}
        </div>
      </div>
      <div className="item">
        <Input
          type="password"
          className="form__input password"
          icon={searchIcon}
          placeholder="Password replay"
          register={registerPassword("user.passwordReplay", {
            required: "Password replay is required",
            validate: (value: string) =>
              value === password || "Passwords do not match",
          })}
        />
        <div
          className={`item__text ${errors.user?.passwordReplay ? "error" : ""}`}
        >
          {errors.user?.passwordReplay
            ? errors.user.passwordReplay.message
            : "Repeat your password without errors"}
        </div>
      </div>
    </div>
  );
};
export default FormPassword;
