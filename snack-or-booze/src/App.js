import React from "react";
import Cafe from "./Cafe";
import NavBar from "./NavBar";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cafe>
      <NavBar />
      <Routes />
        </Cafe>
    </div>
  )}

export default App;
