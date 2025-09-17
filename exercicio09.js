//Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
let numero = parseInt(prompt("Escreva um número inteiro"));

if (numero > 0) {
    console.log(`${numero} é positivo.`);
}else if (numero < 0) {
    console.log(`${numero} é negativo.`);
} else {
    console.log(`O número é zero.`);
}