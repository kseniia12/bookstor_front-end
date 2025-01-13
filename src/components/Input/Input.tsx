import React from "react";
import { StylesWrapper } from "./style";
import { PropsInput } from "../../typing";
const Input: React.FC<PropsInput> = (props) => {
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
