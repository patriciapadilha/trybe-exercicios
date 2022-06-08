// 2 - Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const manipulandoParametros = require('./index');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

console.log(`num 1: ${num1}, num 2: ${num2}, num 3: ${num3}`)

manipulandoParametros(num1, num2, num3)
  .then((result) => console.log(result)) 
  .catch(err => console.log("erro: %s", err.message))

// 3 - Reescreva o código do exercício anterior para que utilize async/await.
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.

async function randomNumbers () {
    const num1 = Math.floor(Math.random() * 100 + 1);
    const num2 = Math.floor(Math.random() * 100 + 1);
    const num3 = Math.floor(Math.random() * 100 + 1);

    console.log(`num 1: ${num1}, num 2: ${num2}, num 3: ${num3}`)
    
    try {
        const result = await manipulandoParametros(num1, num2, num3);
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
}

randomNumbers();