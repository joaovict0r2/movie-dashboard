import GlobalStyles from "assets/styles/global";
import themes from "assets/styles/themes";
import SideNav from "components/SideNav";
import { AppContext } from "context/AppContext";
import { useContext, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "Routes";
import { ThemeProvider } from "styled-components";

import { Container } from "./style";

function App() {
  const { theme } = useContext(AppContext);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />

        <Container>
          <SideNav />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
