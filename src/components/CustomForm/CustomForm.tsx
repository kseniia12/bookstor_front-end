import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { StylesWrapper } from "./style";
import { PropsCustomForm } from "../../typing";

const CustomForm: React.FC<PropsCustomForm> = (props) => {
  const { fields, width } = props;
  return (
    <StylesWrapper>
      {fields.map((field, index) => (
        <div key={index}>
          <CustomInput
            placeholder={field.placeholder}
            icon={field.icon}
            width={width}
          />
          <div className="label">{field.label}</div>
        </div>
      ))}
      <CustomButton className="button" text="Log In" />
    </StylesWrapper>
  );
};

export default CustomForm;
