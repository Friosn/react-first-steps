import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>Avatar Generator</h1>
        <h2 className="emoji">🧟‍♀️🤖👽👻👹🦝🧞‍♀️</h2>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
