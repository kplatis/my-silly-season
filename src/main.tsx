import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import MainPage from "@/pages/MainPage";
import store from "@/store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <MainPage />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);
