// Agora a prática
// A seguir, temos possíveis soluções para os exercícios:
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (employeeGenerator) => {
    const employees = {
      id1: employeeGenerator('Pedro Guerra'),
      id2: employeeGenerator('Luiza Drumond'),
      id3: employeeGenerator('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

//   2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const confereSorteio = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado;

const resultadoSorteio = (meuNumero, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return callback(meuNumero, numeroSorteado) ? 'Parabéns você ganhou!' : 'Tente novamente!';
};

console.log(resultadoSorteio(2, confereSorteio));
