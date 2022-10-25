import React from "react";

export const Card = (props) => {
  const { character } = props;

  return (
    <div>
      <h2>id: {character.id}</h2>
      <h3>name: {character.name}</h3>
      <h4>status: {character.status}</h4>
    </div>
  );
};

export default Card;
