import React from "react";
import { StylesWrapper } from "./style";
import { IPropsInput } from "../../lib/typing";

const Input: React.FC<IPropsInput> = (props) => {
  return (
    <StylesWrapper>
      <img src={props.icon} alt="Logo" className="icon" />
      <input
        {...props.register}
        type="text"
        placeholder={props.placeholder}
        className={props.className}
      />
    </StylesWrapper>
  );
};

export default Input;
