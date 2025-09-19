//Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.
let idade = parseInt(prompt("Qual sua idade?"))

if(idade >= 18){
    console.log(`Você tem ${idade} anos. Parabéns pode dirigir`)
}else{
    console.log(`Você tem ${idade} anos. Ainda não pode dirigir`);
}