import React, { useEffect, useState } from "react";
import { Pokemon } from "../../models/pokemon";
import { getPokemon } from "../../service/pokemon_api";
import PokemonCard from "./PokemonCard";

const startId = 1;
const endId = 10;

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      for (let i = startId; i < endId + 1; i++) {
        const p = await getPokemon(i);
        setPokemon((prev) => [...prev, p]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemon.map((p) => (
        <PokemonCard pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;
