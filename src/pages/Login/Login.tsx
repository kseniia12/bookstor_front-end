import React from "react";
import emailIcon from "../../assets/email.png";
import searchIcon from "../../assets/hide.png";
import imgMan from "../../assets/man-with-book.png";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { StylesWrapper } from "./style";
import { useAppDispatch } from "../../hooks";
import { IFormInput } from "../../lib/types/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginUserThunk } from "../../store/thunk/thunkUser";
import constant from "../../lib/constants/constants";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const user = await dispatch(loginUserThunk(data)).unwrap();
      if (user) {
        navigate(constant.CATALOG_BOOKS)
      }
    } catch (error) {
      toast.error("Data entered incorrectly");
      navigate(constant.SIGN_IN);
    }
  };

  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <Input
              type="text"
              className="item__input"
              icon={emailIcon}
              placeholder="Email"
              register={register("email", {
                required: true,
                pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
              })}
            />
            <div className={`item__text ${errors.email ? "error" : ""}`}>
              {errors.email ? "Email is not correct" : "Enter your email"}
            </div>
          </div>
          <div className="item">
            <Input
              type="password"
              register={register("password", {
                required: true,
              })}
              className="item__input"
              icon={searchIcon}
              placeholder="Password"
            />
            <div className={`item__text ${errors.password ? "error" : ""}`}>
              {errors.password
                ? "This field is required"
                : "Enter your password"}
            </div>
          </div>
          <Button className="button" text="Log In" />
        </form>
      </div>
      <div>
        <img src={imgMan} alt="Logo" className="search__icon" />
      </div>
    </StylesWrapper>
  );
};

export default Login;
