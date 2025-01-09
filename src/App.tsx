import React from "react";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./style/theme";
import Login from "./components/Login/Login";
import constantForAxios from "./constants/constants";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./components/Registration/Registration";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={`${constantForAxios.SIGN_IN}`} element={<Login />} />
          <Route path={`${constantForAxios.SIGN_UP}`} element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
