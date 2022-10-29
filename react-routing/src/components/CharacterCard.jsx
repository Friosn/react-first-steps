import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ element }) => {
  return (
    <div className={element.id}>
      <img src={element.image} />
      <h2>Name: {element.name}</h2>
      <h4>Status: {element.status}</h4>
      <p>Belongs to the {element.species} species</p>
      <p>Originally from the planet {element.origin.name}</p>
      <p>This character appears in {element.episode} episode</p>
    </div>
  );
};

export default CharacterCard;
