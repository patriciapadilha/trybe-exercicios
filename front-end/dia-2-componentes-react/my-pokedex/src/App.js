import { Component } from 'react';
import './App.css';
import PokeList from "./components/PokeList";

// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

class App extends Component {
  render () {
    return (
      <main>
        <h1> Pokedex</h1>
        <PokeList/>
      </main>
    );
  }
}


export default App;
