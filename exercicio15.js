//Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo
let palavra = prompt("Digite uma palavra:");

// deixa tudo em minúsculas para evitar erro com maiúsculas
palavra = palavra.toLowerCase();

// inverte a palavra
let invertida = palavra.split("").reverse().join("");

// verifica se é igual
if (palavra === invertida) {
  console.log(`${palavra} é um palíndromo ✅`);
} else {
  console.log(`${palavra} não é um palíndromo ❌`);
}
