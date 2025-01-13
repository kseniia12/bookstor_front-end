import React from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgMan from "../../img/man-with-book.png";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { StylesWrapper } from "./style";
import { useAppDispatch } from "../../hooks";
import { IFormInput } from "../../lib/typing";
import { useForm, SubmitHandler } from "react-hook-form";
import { thunkLoginUser } from "../../store/thunk/thunkUser";

const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const user = await dispatch(thunkLoginUser(data)).unwrap();
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      navigate("/auth/sign-in");
    }
  };

  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <Input
              register={register("email")}
              className="item__input"
              icon={emailIcon}
              placeholder="Email"
            />
            <div>Enter your email</div>
          </div>
          <div className="item">
            <Input
              register={register("password")}
              className="item__input"
              icon={searchIcon}
              placeholder="Password"
            />
            <div>Enter your password</div>
          </div>
          <Button className="button" text="Log In" />
        </form>
      </div>
      <div className="search">
        <img src={imgMan} alt="Logo" className="search_icon" />
      </div>
    </StylesWrapper>
  );
};

export default Login;
