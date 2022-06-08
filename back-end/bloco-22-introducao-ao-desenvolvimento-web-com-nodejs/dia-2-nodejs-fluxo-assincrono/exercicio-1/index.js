
// 1- Crie uma função que receba três parâmetros e retorna uma Promise.

// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".

// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).

// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"

// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function manipulandoParametros (param1, param2, param3) {
   const promise = new Promise((resolve, reject) => {
       if(typeof param1 !== "number" || typeof param1 !== "number" || typeof param1 !== "number") {
           reject(new Error("Informe apenas números"));
       }

       const resultado = ((param1 + param2) * param3);
       
       if (resultado < 50) {
           reject(new Error("Valor muito baixo"));
       }

       if(resultado > 50) {
           resolve(resultado);
       }
       
   });
   return promise;
}

module.exports = manipulandoParametros;

// manipulandoParametros(1, 1, 1)
//   .then((result) => console.log(result)) 
//   .catch(err => console.log("erro: %s", err.message))