import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import imgMan from "../../img/man-with-book.png";
import CustomButton from "../CustomButton/CustomButton";
import { Main } from "./style";
import CustomForm from "../CustomForm/CustomForm";
const Login = () => {
  const formFields = [
    {
      placeholder: 'Email',
      icon: "../../img/search.png"
    },
    {
      placeholder: 'Password',
      icon: "../../img/search.png"
    },
  ];
  return (
    <div>
      <Header />
      <Main>
        <div className="test">
          <h1 className="title">Log In</h1>
         <CustomForm fields={formFields}/>
        </div>
        <div className="search">
          <img src={imgMan} alt="Logo" className="search__icon" />
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default Login;
