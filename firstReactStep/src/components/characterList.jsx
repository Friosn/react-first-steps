import React from "react";
import Card from "./card";

export const CharacterList = () => {
  const [charactersList, setCharactersList] = React.useState([]);

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
        <Card key={character.id} character={character} />
      ))}
      <p>Hey there React! This is the beginning of a beautiful friendship 🐣</p>
    </>
  );
};

export default CharacterList;
