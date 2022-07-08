import React, { Component } from 'react';
import PessoalFieldset from './PessoalFieldset';
import ProfissionalFieldset from './ProfissionalFieldset'

class Form extends Component {
  render() {
    
    return (
      <form>
        <PessoalFieldset/>
        <ProfissionalFieldset/>
        <input
          type="button"
          value="Enviar"
        />
        <input
          type="reset"
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;