import React from "react";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./style/theme";
import Login from "./pages/Login/Login";
import constant from "./constants/constants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivateRouter from "./utils/PrivateRouter";
import UserProfile from "./pages/UserProfile/UserProfile";

import CatalogBooks from "./components/CatalogBooks/CatalogBooks";
import { StylesWrapper } from "./components/StylesWrapper";
import InitializationProject from "./components/InitializationProject";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <InitializationProject>
      <BrowserRouter>
        <StylesWrapper>
          <Header />
          <Routes>
            <Route path={constant.SIGN_IN} element={<Login />} />
            <Route
              path={constant.SIGN_UP}
              element={<Registration />}
            />
            <Route
              path={constant.CATALOG_BOOKS}
              element={<CatalogBooks />}
            />
            <Route element={<PrivateRouter />}>
              <Route
                path={constant.HOME_PAGE}
                element={
                    <UserProfile />
                }
              />
            </Route>
          </Routes>
        </StylesWrapper>
        <Footer />
      </BrowserRouter>
      </InitializationProject>
    </ThemeProvider>
  );
};

export default App;
