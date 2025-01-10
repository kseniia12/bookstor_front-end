import React from "react";
import imgMan from "../../img/man-with-book.png";
import { Main } from "./style";
import { PropsInput } from "../../typing";
// import CustomForm from "../CustomForm/CustomForm";
// import { PropsCustomForm } from "../../typing";

const Layout: React.FC<PropsInput> = (props) => {
  return (
    <Main>
      <div className="form">
        <h1 className="form-title"></h1>
        {/* <CustomForm fields={props.fields} /> */}
      </div>
      <div className="search">
        <img src={imgMan} alt="Logo" className="search_icon" />
      </div>
    </Main>
  );
};

export default Layout;
