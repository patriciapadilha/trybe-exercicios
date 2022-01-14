// Praticando a implementação de testes

// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

// Copie as funções já implementadas e desenvolva os testes. Separe as funções e os testes em arquivos diferentes para evitar qualquer tipo de problema.

// Crie os arquivos com o respectivo nome da função. Ex: sum.js e sum.test.js

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

 module.exports = sum; 