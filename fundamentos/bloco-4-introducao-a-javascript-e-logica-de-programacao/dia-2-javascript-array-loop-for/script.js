//Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função `console.log()` ;
for(let index =0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for(let index =0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log(sum);
//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let media = sum / numbers.length;
console.log(media);
//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media >= 20){
    console.log('valor maior que 20')
} else {
    console.log('valor mmenor que 20')
}
//5. Utilizando `for` , descubra qual o maior valor contido no array e imprima-o;
let maximumValue = 0;
for(let i =0; i < numbers.length; i += 1) {
    if (numbers[i] > maximumValue){
        maximumValue = numbers[i];
    }
}
console.log(maximumValue);
//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let odd = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0){
        odd += 1;
    }
}
if(odd === 0){
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(odd);
}
//7. Utilizando `for` , descubra qual o menor valor contido no array e imprima-o;
let minimumValue = numbers[0];
for(let i =0; i < numbers.length; i += 1) {
    if (numbers[i] < minimumValue){
        minimumValue = numbers[i];
    }
}
console.log(minimumValue);
//8. Utilizando `for` , crie um array que vá de 1 até 25 e imprima o resultado;
let contagem = [];
for(let contador = 1; contador <= 25; contador += 1) {
    contagem.push(contador);
}
console.log(contagem)
//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por `2` .
let divisao = [];
for(let i = 0; i < contagem.length; i += 1) {
    divisao.push(contagem[i] * 2);
}
console.log(divisao);