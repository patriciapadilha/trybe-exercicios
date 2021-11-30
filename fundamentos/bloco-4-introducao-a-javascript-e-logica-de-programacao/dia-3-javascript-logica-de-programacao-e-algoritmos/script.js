//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****


for(let index = 0; index < 5; index += 1){
    let line = '';

    for(let i= 0; i < 5; i += 1){
        line = line + '*';   
    }
    console.log(line);
}

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****


let line = '';

for(let i= 0; i < 5; i += 1){
    line = line + '*';   
    console.log(line);
}

//3- Agora inverta o lado do triângulo. Por exemplo: Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// n = 5

//     *
//    **
//   ***
//  ****
// *****


let position = 5;

for(let i= 0; i < 5; i += 1){
    let line = '';
    for(let index = 0; index < 5; index += 1){
        if(index < position){
            line = line + ' ';
        } else {
            line = line + '*';
        }
    }
   console.log(line);
   line = '';
   position -= 1;
}


