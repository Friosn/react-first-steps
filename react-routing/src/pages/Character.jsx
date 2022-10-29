import React from "react";
import CharacterCard from "../components/CharacterCard";
import { useParams, useNavigate } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = CharacterCard(id);
  // let characterDetail = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  /*     if(!character) return <p>Character not found beach 🏖️</p>
   
  return (
  <div>
    <CharacterCard character={character}/>
    <button  onClick={}></button>
  </div>
  ) */
};
export default Character;
