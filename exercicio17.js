//Exercício 17: Escreva um programa que determina se um número é par ou ímpar.
let numero = parseInt(prompt("Digite um número:"));

if(numero % 2 ===0){
    console.log(`Seu número é ${numero}. È PAR`)
}else{
    console.log(`Seu número ${numero}. È IMPAR`);
}