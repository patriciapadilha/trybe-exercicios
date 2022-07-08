import React, { Component } from 'react';


class ProfissionalFieldset extends Component {
  render() {
    
    return (
        <fieldset>
        <label for="">Resumo do currículo:</label>
          <textarea
                required
                name="resume"
                id="resume"
                cols="30"
                rows="10"
                maxlength="1000"
          ></textarea>
          <label for="role">Cargo: </label>
            <textarea
                required
                type="text"
                name="input-role"
                id="role"
                maxlength="40"
            />
           <label for="description">Descrição do cargo: </label>
             <input
                required
                type="text"
                name="input-description"
                id="description"
                maxlength="500"
              />
        </fieldset>
    );
  }
}

export default ProfissionalFieldset;