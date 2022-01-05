//Adicionar estados
// function createStateOptions() {
//   let states = document.getElementById('state');
//   let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

//   for (let index = 0; index < stateOptions.length; index += 1) {
//     let option = document.createElement('option');
//     option.innerText = stateOptions[index];
//     option.value = stateOptions[index];
//     states.appendChild(option);
//   }
// }

function stopSubmit(event) {
    console.log("stop submit");
    event.preventDefault();  
}

window.onload = function () {
    // createStateOptions();
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', stopSubmit);
  
  }