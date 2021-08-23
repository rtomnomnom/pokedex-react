export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

export interface PokemonResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: [];
  forms: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  sprites: Sprites;
  species: object;
  stats: [];
  types: [];
}

interface Sprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
