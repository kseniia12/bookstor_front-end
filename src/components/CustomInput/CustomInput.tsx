import React from "react";
import { StylesWrapper } from "./style";
import { PropsCustomInput } from "../../typing";

const CustomInput: React.FC<PropsCustomInput> = (props) => {
  return (
    <StylesWrapper width={props.width}>
      <div className="icon">
        <img src={props.icon} alt="Logo" />
      </div>
      <input type="text" placeholder={props.placeholder} className="input" />
    </StylesWrapper>
  );
};
export default CustomInput;
