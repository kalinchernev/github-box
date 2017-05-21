import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from "material-ui/AppBar";
import GithubForm from "./components/GithubForm";
import "./App.css";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="GithubBox" />
      <GithubForm />
    </div>
  </MuiThemeProvider>
);

export default App;
