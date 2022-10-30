import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homie">
      <h2>Welcome to our home, the Mind and the Freedom</h2>
      <p>
        <span>
          Visit our gallery of custom characters made by the community 🥸
        </span>
      </p>
      <p>
        <span>And don't hesitate to create your own avatar!</span>
      </p>
      <Link to="characters">Gallery & Creation-Room</Link>
    </div>
  );
};

export default Home;
