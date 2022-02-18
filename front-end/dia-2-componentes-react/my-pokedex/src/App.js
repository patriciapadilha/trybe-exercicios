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
      <>
      <main>
        <header>
          <h1> Pokedex</h1>
        </header>
        <PokeList/>
      </main>
      <footer>
        <p>Atividade desenvolvida no curso da Trybe, utilizando React.</p>
      </footer>
      </>
    );
  }
}


export default App;
