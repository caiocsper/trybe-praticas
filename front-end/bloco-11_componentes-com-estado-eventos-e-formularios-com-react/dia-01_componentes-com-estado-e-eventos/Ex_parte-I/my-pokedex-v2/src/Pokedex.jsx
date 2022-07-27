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

    this.state = {
      curPokemon: 0,
      typeFilter: null,
      btnDisabled: false,
    };
  }

  nextPokemon = (pokemons) => {
    this.setState(({ curPokemon }) => {
      const nextPokemon = curPokemon + 1;

      return { curPokemon: nextPokemon < pokemons.length ? nextPokemon : 0 };
    });
  }

  previousPokemon = (pokemons) => {
    this.setState(({ curPokemon }) => {
      const previousPokemon = curPokemon - 1;

      return {
        curPokemon: previousPokemon >= 0
          ? previousPokemon
          : pokemons.length - 1,
      };
    });
  }

  getPokemonsByType = () => {
    const { pokemons } = this.props;
    const { typeFilter } = this.state;

    return pokemons.filter(({ type }) => !typeFilter || type === typeFilter);
  };

  changeTypeFilter = ({ target }) => {
    this.setState(({ curPokemon, typeFilter }) => {
      const newFilter = target.getAttribute('data-typefilter');

      return {
        curPokemon: newFilter === typeFilter ? curPokemon : 0,
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
    const { curPokemon, btnDisabled } = this.state;
    const pokemonsByType = this.getPokemonsByType();

    return (
      <section className="pokedex">
        <Pokemon pokemon={ pokemonsByType.at(curPokemon) } />

        <div className="controls">
          <Button
            cssClasses="previous"
            disabled={ btnDisabled }
            handleClick={ () => this.previousPokemon(pokemonsByType) }
          >
            Previous
          </Button>
          <Button
            cssClasses="next"
            disabled={ btnDisabled }
            handleClick={ () => this.nextPokemon(pokemonsByType) }
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
