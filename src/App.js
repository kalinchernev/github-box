import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import GithubUserForm from "./components/GithubUserForm";
import "./App.css";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <GithubUserForm />
  </MuiThemeProvider>
);

export default App;
