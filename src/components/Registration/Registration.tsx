import React, { useState } from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import imgMan from "../../img/man-with-book.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { StylesWrapper } from "../Login/style";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { thunkCreateUser } from "../../store/thunk/thunkUser";
import { IFormInput } from "../../typing";

const Registration = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const user = await dispatch(
        thunkCreateUser(data)
      ).unwrap();
      if (user) {
        // navigate("/todos");
      }
    } catch (error) {
      console.log(error)
      // navigate("/auth/sign-in");
    }
  };

  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <Input
              register={register("email", {
                required: true,
                maxLength: 20,
              })}
              className="item__input"
              icon={emailIcon}
              placeholder="Email"
            />
            <div>Enter your email</div>
          </div>
          <div className="item">
            <Input
              className="item__input"
              icon={searchIcon}
              placeholder="Password"
              register={register("password")}
            />
            <div>Enter your password</div>
          </div>
          <div className="item">
            <Input
              className="item__input"
              icon={searchIcon}
              placeholder="Password replay"
              register={register("passwordReplay")}
            />
            <div>Repeat your password without errors</div>
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

export default Registration;
