import React from "react";
import { StylesWrapper } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface IPropsInput {
  register?: UseFormRegisterReturn;
  className?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  readOnly?: boolean;
  type: string;
}

const Input: React.FC<IPropsInput> = (props) => {
  return (
    <StylesWrapper className={props.className}>
        <img src={props.icon} alt="Logo" className="icon" />
        <input
          {...props.register}
          type={props.type}
          placeholder={props.placeholder}
          className={"label"}
          defaultValue={props.value}
        />
    </StylesWrapper>
  );
};

export default Input;
