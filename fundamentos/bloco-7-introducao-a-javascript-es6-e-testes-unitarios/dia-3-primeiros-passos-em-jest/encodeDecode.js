// Praticando a implementação de testes

// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
// Copie as funções já implementadas e desenvolva os testes. Separe as funções e os testes em arquivos diferentes para evitar qualquer tipo de problema.
// Crie os arquivos com o respectivo nome da função.

// encodeDecode.js
function mapString(objectMap, string) {
    const splitString = string.split('');
    const mappedArray = [];
  
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
  
    return mappedArray.join('');
  }
  
  function encode(string) {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  
  function decode(string) {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  }
  
  const functions = { encode, decode };
  module.exports = functions;