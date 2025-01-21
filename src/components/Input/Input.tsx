import React from "react";
import { StylesWrapper } from "./style";
import { IPropsInput } from "../../lib/typing";

const Input: React.FC<IPropsInput> = (props) => {
  return (
    <StylesWrapper>
      <img src={props.icon} alt="Logo" className="icon" />
      <input
        {...props.register}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        defaultValue={props.value}
        disabled={props.readOnly}
      />
    </StylesWrapper>
  );
};

export default Input;
