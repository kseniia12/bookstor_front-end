import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

interface Object {
  placeholder: string;
  icon?: string
}

interface Props {
  fields: Object[];
}

const CustomForm: React.FC<Props> = (props) => {
  const { fields } = props;
  return (
    <form>
      {fields.map((field, index) => (
        <div key={index} className="form-field">
          <CustomInput placeholder={field.placeholder} icon={field.icon}  />
        </div>
      ))}
      <CustomButton text="Log In" className="button" />
    </form>
  );
};

export default CustomForm;
