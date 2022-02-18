import React from "react";
import pokemons from "../data";
import PokemonCard from "./Pokemon";


class PokeList extends React.Component {
    render () {
        return (
        <section>
          {pokemons.map((element) => (
            <PokemonCard key={element.id} PokeInfo={element}/>
          ))}
        </section>
        );
    }
}

export default PokeList;