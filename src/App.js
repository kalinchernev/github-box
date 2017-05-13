import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import GithubUserForm from "./components/GithubUserForm";
import "./App.css";

const App = () => (
  <MuiThemeProvider>
    <GithubUserForm />
  </MuiThemeProvider>
);

export default App;
