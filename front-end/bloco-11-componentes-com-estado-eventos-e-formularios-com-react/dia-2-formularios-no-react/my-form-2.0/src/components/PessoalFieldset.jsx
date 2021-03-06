import React, { Component } from 'react';


class PessoalFieldset extends Component {
  render() {
    
    return (
      <fieldset>
        <label> Nome:</label>
          <input 
            type="text" 
            name="nome" 
            required></input>
        <label> Email:</label>
          <input 
            type="text" 
            name="email" 
            required></input>
        <label> CPF:</label>
          <input 
            type="text" 
            name="cpf" 
            required></input>
        <label> Endereço:</label>
          <input 
            type="text" 
            name="endereco" 
            required></input>
        <label> Cidade:</label>
          <input 
            type="text" 
            name="cidade" 
            required></input>
        <label> Estado:</label>
          <select required name="states-brazil">
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        <label for="">Casa
          <input 
            required 
            type="radio" 
            name="type"/>
        </label>
        <label for="">Apartamento
          <input
            required 
            type="radio" 
            name="type"/>
        </label>   
      </fieldset>
    );
  }
}

export default PessoalFieldset;