import { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Estudar', 'Tomar café', 'Codar', 'Dormir'];

class App extends Component {
  render() {
    return (
        <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;