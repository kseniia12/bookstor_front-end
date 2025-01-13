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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
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

  return (
    <StylesWrapper>
      <div>
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="item">
            <Input
              register={register("email", {
                required: true,
                pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
              })}
              className={`${errors.email ? "item__input-error" : "item__input"}`}
              icon={emailIcon}
              placeholder="Email"
            />
            <div className={`${errors.email ? "item__div-error" : "item__div"}`}>
              {errors.email ? "Email is not correct" : "Enter your email"}
            </div>
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
          <Button className="button" text="Sign Up" />
        </form>
      </div>
      <div className="search">
        <img src={imgMan} alt="Logo" className="search_icon" />
      </div>
    </StylesWrapper>
  );
};

export default Registration;
