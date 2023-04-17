import React from "react";

const Index = ({ pokemonData }) => {
  return (
    <div>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>
            <a href={`/pokemon/${index}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
