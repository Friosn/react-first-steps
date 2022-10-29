import React from "react";
import { useState, useEffect } from "react";
import CharactersGallery from "../components/CharacterGallery";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Characters = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [chapter, setChapter] = React.useState("");
  const [planet, setPlanet] = React.useState("");
  const [voice, setVoice] = React.useState("");
  const [characters, setCharacters] = React.useState({});

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetch("http://localhost:8080/characters");
      const res = await data.json();
      console.log(res);
      setCharacters(res);
    };
    const characterList = getCharacters();
    getCharacters();
  }, []);

  const createCharacter = (ev) => {
    //con preventDefault PREVENIMOS el comportamiento por defecto del evento submit (que es recargar la página)
    ev.preventDefault();
    //Ahora conformamos un objeto llamado Character, que servirá para almacenar mis datos sacados del servidor con el fetch
    const character = {
      name: name,
      image: image,
      chapter: chapter,
      planet: planet,
      voice: voice,
      id: uuidv4(),
    };
    postCharacter(character);
  };

  const postCharacter = async (person) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/characters",
      data: person,
    });
  };

  return (
    <div>
      <form onSubmit={(ev) => createCharacter(ev)}>
        <fieldset>
          <legend>Introduce a character</legend>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(ev) => setName(ev.target.value)}
          />
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={(ev) => setImage(ev.target.value)}
          />
          <label htmlFor="chapter">Chapter:</label>
          <input
            type="text"
            name="chapter"
            id="chapter"
            onChange={(ev) => setChapter(ev.target.value)}
          />
          <label htmlFor="planet">Planet:</label>
          <input
            type="text"
            name="planet"
            id="planet"
            onChange={(ev) => setPlanet(ev.target.value)}
          />
          <label htmlFor="voice">Voice by:</label>
          <input
            type="text"
            name="voice"
            id="voice"
            onChange={(ev) => setVoice(ev.target.value)}
          />
        </fieldset>
        <input type="submit" value="Create" />
      </form>
      <CharactersGallery characters={characters} />
    </div>
  );
};

export default Characters;
