import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Midnight Gospel</h1>
      </header>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
