import React from "react";
import { StylesWrapper } from "./style";
import { IPropsButton } from "../../lib/typing";

const Button: React.FC<IPropsButton> = (props) => {
  return (
    <StylesWrapper
      type="submit"
      className={props.className}
      onClickCapture={props.onClick}
    >
      {props.text}
    </StylesWrapper>
  );
};

export default Button;
