import React from "react";
import { StylesWrapper } from "./style";

interface IPropsInput {
  register?: any;
  className?: string;
  placeholder?: string;
  icon?: string;
  value?: string;
  readOnly?: boolean;
  type: string;
}

const Input: React.FC<IPropsInput> = (props) => {
  return (
    <StylesWrapper>
      <label className={props.className}>
        <img src={props.icon} alt="Logo" className="icon" />
        <input
          {...props.register}
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          defaultValue={props.value}
        />
      </label>
    </StylesWrapper>
  );
};

export default Input;
