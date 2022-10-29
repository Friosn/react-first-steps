import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [character, setCharacter] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetch(`http://localhost:8080/characters/${id}`);
      const res = await data.json();
      setCharacter(res);
    };
    getCharacters();
  }, []);

  return (
    <div className="character">
      {character ? (
        <figure>
          <img src={character.image} />
          <h3>{character.name}</h3>
          <h5>{character.planet}</h5>
          <h5>{character.voice}</h5>
          <h5>{character.chapter}</h5>
        </figure>
      ) : (
        <p>This is not a Character from this TV Show</p>
      )}
    </div>
  );
};

export default Character;
