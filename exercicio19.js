//Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.
let numero = parseFloat(prompt("Digite um número:"));
let minimo = parseFloat(prompt("Digite o valor mínimo do intervalo:"));
let maximo = parseFloat(prompt("Digite o valor máximo do intervalo:"));

if (numero >= minimo && numero <= maximo) {
  console.log(`${numero} está dentro do intervalo [${minimo}, ${maximo}] ✅`);
} else {
  console.log(
    `${numero} NÃO está dentro do intervalo [${minimo}, ${maximo}] ❌`
  );
}
