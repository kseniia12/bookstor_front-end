import React from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgMan from "../../img/man-with-book.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { StylesWrapper } from "../Login/style";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { thunkCreateUser } from "../../store/thunk/thunkUser";
import { IFormInput } from "../../lib/typing";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const password = watch("password");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const user = await dispatch(thunkCreateUser(data)).unwrap();
    user ? navigate("/home") : navigate("/auth/sign-in");
  };

  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <Input
              type="text"
              className="item__input"
              register={register("email", {
                required: true,
                pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
              })}
              icon={emailIcon}
              placeholder="Email"
            />
            <div className={`item__text ${errors.email ? "error" : ""}`}>
              {errors.email ? "Email is not correct" : "Enter your email"}
            </div>
          </div>
          <div className="item">
            <Input
              type="password"
              className="item__input"
              icon={searchIcon}
              placeholder="Password"
              register={register("password", {
                required: true,
              })}
            />
            <div className={`item__text ${errors.password ? "error" : ""}`}>
              {errors.password
                ? "This field is required"
                : "Enter your password"}
            </div>
          </div>
          <div className="item">
            <Input
              type="password"
              className="item__input"
              icon={searchIcon}
              placeholder="Password replay"
              register={register("passwordReplay", {
                required: "Password replay is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <div
              className={`item__text ${errors.passwordReplay ? "error" : ""}`}
            >
              {errors.passwordReplay
                ? errors.passwordReplay.message
                : "Repeat your password without errors"}
            </div>
          </div>
          <Button className="button" text="Sign Up" />
        </form>
      </div>
      <div>
        <img src={imgMan} alt="Logo" className="search_icon" />
      </div>
    </StylesWrapper>
  );
};

export default Registration;
