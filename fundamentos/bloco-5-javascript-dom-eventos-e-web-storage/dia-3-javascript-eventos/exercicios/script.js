function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Criar li 
// id='days'  filhos de ul

// todos
// classNome = 'day' 

// 24, 25 e 31
// classNome = 'day holiday'

// 4, 11, 18 e 25
// classNome = 'day friday'

let ulPai = document.getElementById('days');

for (let num = 0; num < dezDaysList.length; num += 1) {
   let daysList = dezDaysList[num];
    // console.log(daysList);
   
   dayItem = document.createElement('li');
   ulPai.appendChild(dayItem);
   dayItem.innerText = dezDaysList[num];
   dayItem.nameClass = 'day';
//    console.log(dayItem);
   
   if (daysList === 24 | daysList === 31) {
       dayItem.className = 'day holiday';
       dayItem.innerHTML = daysList;
   } else if (daysList === 4 | daysList === 11 | daysList === 18) {
       dayItem.className = 'day friday';
       dayItem.innerHTML = daysList;
   } else if (daysList === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = daysList;
   } else {
     dayItem.className = 'day';
     dayItem.innerHTML = daysList;
   }
}    

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButton (nameButton){
let divPai = document.querySelector('.buttons-container');
let buttonFeriado = document.createElement('button');
let buttonFeriadoID = 'btn-holiday';

divPai.appendChild(buttonFeriado);
buttonFeriado.id = buttonFeriadoID;
buttonFeriado.innerHTML = nameButton;
}

createButton('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeColorHoliday () {
    let buttonFeriado = document.querySelector('#btn-holiday');
    let daysHoliday = document.querySelectorAll('.holiday');
    let background = 'rgb(238,238,238)';
    let newColor = 'white';
    
    
    buttonFeriado.addEventListener('click', function(event) {
        event.stopPropagation();
        for (let index = 0; index < daysHoliday.length; index += 1) {
            if (daysHoliday[index].style.backgroundColor === newColor) {
                daysHoliday[index].style.backgroundColor = background;
            } else {
                daysHoliday[index].style.backgroundColor = newColor;
            }
        }
    })
    
}
changeColorHoliday();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createButtonFriday (nameButton){
    let divPai = document.querySelector('.buttons-container');
    let buttonFeriado = document.createElement('button');
    let buttonFeriadoID = 'btn-friday';
    
    divPai.appendChild(buttonFeriado);
    buttonFeriado.id = buttonFeriadoID;
    buttonFeriado.innerHTML = nameButton;
}
        
createButtonFriday('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeTextFriday (array) {

    let buttonFriday = document.querySelector('#btn-friday');
    let daysFriday = document.querySelectorAll('.friday');
    let newText = 'Sexta-feira'

    buttonFriday.addEventListener('click', function(event) {
        event.stopPropagation();
        for (let index = 0; index < daysFriday.length; index += 1) {
            if (daysFriday[index].innerHTML !== newText) {
                daysFriday[index].innerHTML = newText;
            } else {
                daysFriday[index].innerHTML = array[index];
            }
        }
    })
    
}

let friday = [ 4, 11, 18, 25 ];
changeTextFriday(friday);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

// function zoomIn ()
// mouseover
// class days

// let days = document.querySelectorAll('#days');
//     days.addEventListener('mouseover', function(event) {
//      event.target.style.fontSize = '20px';
//      event.target.style.fontWeight = '600';
//     });

// function zoomIn () {
//   let days = document.querySelector('#days'); //id da ul

//   days.addEventListener('mouseover', function(event) {
//     // event.stopPropagation();
//     console.log(event.target);
//     event.target.style.fontSize = '30px';
//     event.target.style.fontWeight = '600';
//   })
// }
// zoomIn();

function zoomIn () {
    let days = document.querySelector('#days'); 
  
    days.addEventListener('mouseover', function(event) {
      event.stopPropagation();
      console.log(event.target);
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  }
  zoomIn();

// function zoomOut ()
// mouseout

function zoomOut () {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  }
  zoomOut();

