import React from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./style/theme";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      {/* <Header />
      <Footer /> */}
      <Login />
    </ThemeProvider>
  );
};

export default App;
