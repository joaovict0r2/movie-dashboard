import GlobalStyles from "assets/styles/global";
import themes from "assets/styles/themes";
import { AppContext } from "context/AppContext";
import { useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";

function App() {
  const { theme } = useContext(AppContext);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <p>Ola</p>
    </ThemeProvider>
  );
}

export default App;
