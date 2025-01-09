import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import imgMan from "../../img/man-with-book.png";
import { Main } from "./style";
import CustomForm from "../CustomForm/CustomForm";
import { PropsCustomForm } from "../../typing";

const Layout: React.FC<PropsCustomForm> = (props) => {
  return (
    <>
      <Header />
      <Main>
        <div className="form">
          <h1 className="form-title">{props.title}</h1>
          <CustomForm fields={props.fields} width={props.width} />
        </div>
        <div className="search">
          <img src={imgMan} alt="Logo" />
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
