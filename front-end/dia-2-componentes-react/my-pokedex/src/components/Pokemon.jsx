import React from "react";


class PokemonCard extends React.Component {
  render () {
    const { PokeInfo } = this.props;
    
    return (
        <article>
          <h2>Nome: {PokeInfo.name}</h2>
          <p>Tipo: {PokeInfo.type}</p>
          <p>Peso: {PokeInfo.averageWeight.value} {PokeInfo.averageWeight.measurementUnit}</p>
          <img src={PokeInfo.image} alt={PokeInfo.name}></img>
        </article>
    );
  }
}


export default PokemonCard;