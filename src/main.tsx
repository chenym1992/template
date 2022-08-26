import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import App from "./pages/App";
import "./i18n";
import store from "./state";
import UserUpdater from "./state/user/updater";
import { Provider } from "react-redux";
import { useTranslation } from "react-i18next";

function Updaters() {
  return (
    <>
      <UserUpdater />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FixedGlobalStyle />
    <Provider store={store}>
      <Updaters />
      <ThemeProvider>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
