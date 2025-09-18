//Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.

let idade = parseInt(prompt("Qual sua idade?"));

if(idade >= 16){
    console.log(`Parabéns você tem ${idade} e pode votar`)
}else{
    console.log(`Você tem ${idade} e ainda não pode votar`);

}