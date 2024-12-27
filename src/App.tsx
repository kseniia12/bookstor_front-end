import React from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./style/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
