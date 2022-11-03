import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const CodeFetchingInput = () => {
  const [filter, setFilter] = useState('ditto');
  const [pokemonList, setPokemonList] = useState([]);
  const [debounceFilter] = useDebounce(filter, 500);

  useEffect(() => {
    const getPokemonsFiltered = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`);
      const dataToJson = await data.json();

      return {
        ...dataToJson,
        name: dataToJson.name,
        image: dataToJson.sprites.front_shiny,
      };
    };
    console.log("I'm asking stuff to the API");
    getPokemonsFiltered().then((pokemon) => setPokemonList([pokemon]));
  }, [debounceFilter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeFetchingInput;
