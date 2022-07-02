import { useState, createContext, ReactNode, useMemo } from "react";

interface IAppContext {
  theme: string;
  handleToggleTheme: () => void;
}

interface IAppProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppProvider({ children }: IAppProvider) {
  const [theme, setTheme] = useState<string>("dark");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  const providerValue = useMemo(
    () => ({
      theme,
      handleToggleTheme,
    }),
    []
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}
