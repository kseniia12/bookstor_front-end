import React from "react";
import emailIcon from "../../img/email.png";
import searchIcon from "../../img/hide.png";
import Layout from "../Layout/Layout";

const Registration = () => {
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
    {
      placeholder: "Password replay",
      icon: searchIcon,
      label: "Repeat your password without errors",
    },
  ];

  return <Layout title="Sign Up" width={413} fields={formFields} />;
};

export default Registration;
