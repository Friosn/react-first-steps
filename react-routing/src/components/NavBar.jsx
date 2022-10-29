import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
