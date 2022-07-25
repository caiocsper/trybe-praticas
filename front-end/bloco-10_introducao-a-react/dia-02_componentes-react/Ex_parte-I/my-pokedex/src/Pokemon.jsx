import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {

  render() {
    const {
      name,
      type,
      averageWeight: {
        value,
        measurementUnit: unit
      },
      image: imgSource,
    } = this.props.pokeInfo;

    const altText = `Imagem ilustrativa de ${ name }`;

    return (
      <section className  = 'pokemonContainer'>
        <div className = 'pokemonInfo'>
          <span className = 'pokeName'>{ name }</span>
          <span className = 'pokeType'>{ type }</span>
          <span className = 'pokeWeight'> Average weight: { value }{ unit }</span>
        </div>

        <figure className = 'pokemonImage'>
          <img
            src = { imgSource }
            alt = { altText }
          />
        </figure>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokeInfo: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string
  })
}

export default Pokemon