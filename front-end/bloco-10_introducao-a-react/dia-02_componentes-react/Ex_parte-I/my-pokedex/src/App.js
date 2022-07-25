import Pokedex from './Pokedex';
import './App.css';
import pokemons  from './data';

function App() {
  return (
    <Pokedex pokeList = { pokemons }/>
  );
}

export default App;
