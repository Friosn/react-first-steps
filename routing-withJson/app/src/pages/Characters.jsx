import React from "react";
import { useState, useEffect } from "react";
import CharactersGallery from "../components/CharacterGallery";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Characters = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [likes, setLikes] = React.useState("");
  const [planet, setPlanet] = React.useState("");
  const [quote, setQuote] = React.useState("");
  const [characters, setCharacters] = React.useState({});

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetch("http://localhost:8080/characters");
      const res = await data.json();
      console.log(res);
      setCharacters(res);
    };
    getCharacters();
  }, []);

  const createCharacter = (ev) => {
    //con preventDefault PREVENIMOS el comportamiento por defecto del evento submit (que es recargar la página)
    ev.preventDefault();
    //Ahora conformamos un objeto llamado Character, que servirá para almacenar mis datos sacados del servidor con el fetch
    const character = {
      name: name,
      image: image,
      likes: likes,
      planet: planet,
      quote: quote,
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
          <legend>Characterize your idea</legend>
          <div className="labelInput">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
          <div className="labelInput">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={(ev) => setImage(ev.target.value)}
            />
          </div>
          <div className="labelInput">
            <label htmlFor="likes">Loves:</label>
            <input
              type="text"
              name="likes"
              id="likes"
              onChange={(ev) => setLikes(ev.target.value)}
            />
          </div>
          <div className="labelInput">
            <label htmlFor="planet">Planet:</label>
            <input
              type="text"
              name="planet"
              id="planet"
              onChange={(ev) => setPlanet(ev.target.value)}
            />
          </div>
          <div className="labelInput">
            <label htmlFor="voice">Quote:</label>
            <input
              type="text"
              name="quote"
              id="quote"
              onChange={(ev) => setQuote(ev.target.value)}
            />
          </div>
        </fieldset>
        <input type="submit" value="Create" />
      </form>
      <CharactersGallery characters={characters} />
    </div>
  );
};

export default Characters;
