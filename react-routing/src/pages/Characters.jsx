import React from "react";
import CharacterCard from "../components/CharacterCard";
import Character from "./Character";

const Characters = ({ character }) => {
  const [characterList, setCharacterList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character").then(
        (res) => res.json()
      );
      setCharacterList(data.results);
    })();
  }, []);

  return (
    <div className="charactersGallery">
      <h2>Gallery</h2>
      <div className="gallery">
        <CharacterCard />
      </div>
    </div>
  );
};

export default Characters;

/* 
  return (
    <>
      {characterList.map((character) => (
        <CharacterCard key={character.id} element={character} />
      ))}
    </>
  ); */

/* const CharactersNew = () => {
    return (
        <div>
            <form>
                <fieldset>
                    <legend></legend>
                    <label htmlFor="title">Title:</label>
                    <input type='text' name="title" id="title"/>
                    <label htmlFor="poster">Poster:</label>
                    <input type='text' name="poster" id='poster'/>
                    <label htmlFor="year">Year:</label>
                    <input type='text' name='year' id='year' min={1900}/>
                </fieldset>
            </form>
        </div>
    )
} */
