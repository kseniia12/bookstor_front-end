import React from "react";
import { StylesWrapper } from "./style";
import { PropsCustomButton } from "../../typing";

const CustomButton: React.FC<PropsCustomButton> = (props) => {
  return (
    <StylesWrapper className={props.className}>{props.text}</StylesWrapper>
  );
};

export default CustomButton;
