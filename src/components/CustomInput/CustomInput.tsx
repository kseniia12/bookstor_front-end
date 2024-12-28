import React from "react";
import { StylesWrapper } from "./style";

interface Props {
  placeholder: string;
  icon?: string;
}

const CustomInput: React.FC<Props> = (props) => {
  return (
    <StylesWrapper width={558}>
      <div className="search__icon">
        <img src={props.icon} alt="Logo" />
      </div>
      <input type="text" placeholder={props.placeholder} className="input" />
    </StylesWrapper>
  );
};
export default CustomInput;
