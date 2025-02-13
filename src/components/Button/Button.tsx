import React from "react";
import { StylesWrapper } from "./style";

interface IPropsButton {
  text?: string;
  className?: string;
  onClick?: any;
}

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
