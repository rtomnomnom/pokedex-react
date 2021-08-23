import { Pokemon } from "../../models/pokemon";

type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="card" key={pokemon.id}>
      <div>
        <div className="card-id">{pokemon.id}</div>
      </div>
      <div className="card-image">
        <img src={pokemon.imageUrl} alt={pokemon.name}></img>
      </div>
      <div className="card-name">{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
