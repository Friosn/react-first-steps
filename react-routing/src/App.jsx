import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://cdn3.emoji.gg/emojis/PickleRick.gif"
          alt="I'm Pickle Rick!"
        />
        <h1 className="title">
          <strong>I'm Pickle Riiick!!</strong> 🤘
        </h1>
        <button>Blablabla</button>
      </header>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
