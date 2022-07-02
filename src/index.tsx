import App from "components/App";
import { AppProvider } from "context/AppContext";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
