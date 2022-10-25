import { useState } from "react";

import React from "react";
import "./App.css";

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  const [charactersList, setCharactersList] = React.useState(charactersMock);

  React.useEffect(() => {
    (async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character").then(
        (res) => res.json()
      );
      setCharactersList(data.results);
    })();
  }, []);

  return (
    <>
      {charactersList.map((character) => (
        <div key={character.id}>
          <p>{character.id}</p>
          <p>{character.name}</p>
          <p>{character.status}</p>
        </div>
      ))}
      <p>Hey there React! This is the beginning of a beautiful friendship 🐣</p>
    </>
  );
};

export default App;
