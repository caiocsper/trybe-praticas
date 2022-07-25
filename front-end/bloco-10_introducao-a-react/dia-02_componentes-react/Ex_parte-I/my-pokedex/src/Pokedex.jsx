import { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {

  render() {
    const { pokeList } = this.props;
    const pokemons = pokeList.map(pokemon => <Pokemon key = { pokemon.id } pokeInfo = { pokemon } />)

    return (
      <section className = 'pokemonsContainer'>
        { pokemons }
      </section>
    )
  }
}

export default Pokedex