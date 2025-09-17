/*Exercício 10: Escreva um programa que recebe duas notas de um aluno,
 calcula a média e imprime se o aluno foi aprovado ou reprovado 
 (considerando que a média para aprovação é 7).*/
let primeiraNota = parseFloat(prompt("Digite sua primeira nota"));
let segundaNota = parseFloat(prompt("Digite sua segunda nota"));

let media = (primeiraNota + segundaNota) / 2;

if (media >= 7) {
  console.log(`Parabéns sua média é ${media} e está aprovado 🥳🥳🥳`);
} else {
  console.log(`Sua média é ${media} e está Reprovado 😔`);
}
