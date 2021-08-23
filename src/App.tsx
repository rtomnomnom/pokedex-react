import "./App.css";
import PokemonList from "./components/pokemon-list/PokemonList";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
      </div>
      <div className="content">
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
