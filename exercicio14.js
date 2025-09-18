//Exercício 14: Escreva um programa que verifica se um ano é bissexto.

let ano = parseInt(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`${ano} é um ano bissexto ✅`);
} else {
  console.log(`${ano} NÃO é um ano bissexto ❌`);
}
