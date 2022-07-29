import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import Button from './Button';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    const { pokemons } = this.props;

    this.state = {
      curPokemonId: pokemons.at(0).id,
      typeFilter: null,
      btnDisabled: false,
    };
  }

  handleDirectionClick = ({ target }) => {
    this.setState(({ curPokemonId }) => {
      const direction = target.getAttribute('data-pokedirection');
      const pokemonsByType = this.getPokemonsByType();
      const curPokeIndex = pokemonsByType
        .map(({ id }) => id)
        .indexOf(curPokemonId);
      const previousPokemon = pokemonsByType.at(curPokeIndex - 1);
      const nextPokemon = pokemonsByType.at(curPokeIndex + 1) || pokemonsByType.at(0);

      switch (direction) {
        case 'next':
          return { curPokemonId: nextPokemon.id };
        case 'previous':
          return { curPokemonId: previousPokemon.id };
      }
    });
  }

  getPokemonsByType = (paramFilter) => {
    const { pokemons } = this.props;
    const { typeFilter: stateFilter } = this.state;
    const typeFilter = paramFilter || stateFilter;

    return pokemons.filter(({ type }) => !typeFilter || type === typeFilter);
  };

  changeTypeFilter = ({ target }) => {
    this.setState(({ curPokemonId }) => {
      const newFilter = target.getAttribute('data-typefilter');
      const pokemonsByType = this.getPokemonsByType(newFilter);
      const curPoke = pokemonsByType.find(({ id }) => id === curPokemonId)
                      || pokemonsByType.at(0);

      return {
        curPokemonId: curPoke.id,
        typeFilter: newFilter,
      };
    }, () => {
      this.setState({ btnDisabled: this.getPokemonsByType().length === 1 });
    });
  };

  renderAvailableTypes = () => {
    const { pokemons } = this.props;
    const pokemonTypes = [...new Set(pokemons.map(({ type }) => type))];

    return pokemonTypes
      .map((type, ind) => (
        <Button
          key={ ind }
          cssClasses="pokeType"
          dataAttr="data-typefilter"
          dataAttrValue={ type }
          handleClick={ this.changeTypeFilter }
        >
          { type }
        </Button>
      ));
  };

  render() {
    const { curPokemonId, btnDisabled } = this.state;
    const pokemonsByType = this.getPokemonsByType();

    return (
      <section className="pokedex">
        <Pokemon pokemon={ pokemonsByType.find(({ id }) => id === curPokemonId) } />

        <div className="controls">
          <Button
            cssClasses="previous"
            disabled={ btnDisabled }
            dataAttr="data-pokedirection"
            dataAttrValue="previous"
            handleClick={ this.handleDirectionClick }
          >
            Previous
          </Button>
          <Button
            cssClasses="next"
            disabled={ btnDisabled }
            dataAttr="data-pokedirection"
            dataAttrValue="next"
            handleClick={ this.handleDirectionClick }
          >
            Next
          </Button>
        </div>
        <div className="type-controls">
          <Button
            cssClasses="pokeType"
            dataAttr="data-typefilter"
            dataAttrValue=""
            handleClick={ this.changeTypeFilter }
          >
            All
          </Button>
          { this.renderAvailableTypes() }
        </div>
      </section>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
