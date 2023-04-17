import React, { useState, useEffect } from "react";
import pokemonData from "./models/pokemonData";

const Show = (props) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = parseInt(props.match.params.id);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`/api/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
      setIsLoading(false);
    };
    fetchPokemon();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const selectedPokemon = pokemonData.find(p => p.name === pokemon.name);
  const imgUrl = `${selectedPokemon.img}.jpg`;

  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={imgUrl} alt={pokemon.name} />
      <a href="/">Back</a>
    </div>
  );
};

export default Show;
