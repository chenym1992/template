import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import App from "./pages/App";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FixedGlobalStyle />
    {/* <Provider store={store}> */}
    <ThemeProvider>
      <ThemedGlobalStyle />
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
