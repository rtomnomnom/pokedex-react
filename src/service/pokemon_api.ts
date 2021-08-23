import { Pokemon, PokemonResponse } from "../models/pokemon";

const pokemon_url = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${pokemon_url}${id}`);
  const json: PokemonResponse = await response.json();

  return {
    id: json.id,
    name: json.name,
    imageUrl: json.sprites.front_default,
  };
};

