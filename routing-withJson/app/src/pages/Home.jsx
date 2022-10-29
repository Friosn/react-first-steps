import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Welcome to our home, the Mind and the Midnight</h2>
      <ul>
        <li>
          <p>
            <span>Visit the characters of the TV Show 🪄</span>
            <Link to="characters">Characters</Link>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
