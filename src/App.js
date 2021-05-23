import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline"; // cross-browser comp. - css reset
import NavigationBar from "./NavigationBar"; //import custom component

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
    </div>
  );
}

export default App;
