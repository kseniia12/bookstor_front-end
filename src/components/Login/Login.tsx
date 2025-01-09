import React from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import Layout from "../Layout/Layout";

const Login = () => {
  const formFields = [
    {
      placeholder: "Email",
      icon: emailIcon,
      label: "Enter your email",
    },
    {
      placeholder: "Password",
      icon: searchIcon,
      label: "Enter your password",
    },
  ];

  return <Layout title="Log In" width={413} fields={formFields} />;
};

export default Login;
