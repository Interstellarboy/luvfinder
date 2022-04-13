import "./App.css";
import AosAnimation from "./HomePage";
import Nav from "./Nav";
import Tables from "./Tables";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <AosAnimation />
      {/* <Tables /> */}
    </div>
  );
}

export default App;
