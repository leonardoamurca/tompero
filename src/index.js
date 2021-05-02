import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApplicationProvider from "./context";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#000000",
      dark: "#212121",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f50057",
      main: "#ffffff",
      dark: "#f50057",
      contrastText: "#f50057",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ApplicationProvider>
        <App />
      </ApplicationProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
