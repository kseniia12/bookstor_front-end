import React from "react";
import { StylesWrapper } from "./style";
import { PropsButton } from "../../typing";

const Button: React.FC<PropsButton> = (props) => {
  return (
    <StylesWrapper type="submit" className={props.className}>
      {props.text}
    </StylesWrapper>
  );
};

export default Button;
