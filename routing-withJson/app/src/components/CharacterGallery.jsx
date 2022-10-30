import { Link } from "react-router-dom";
import React from "react";

const CharactersGallery = ({ characters }) => {
  return (
    <div className="charactersGallery">
      <h2>⬇️ Gallery ⬇️</h2>
      <div className="gallery">
        {characters.length ? (
          characters.map((character) => (
            <figure key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
            </figure>
          ))
        ) : (
          <p>There is not such a Character... yet 😉</p>
        )}
      </div>
    </div>
  );
};

export default CharactersGallery;
