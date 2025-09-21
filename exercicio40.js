//Exercício 40: Usando um laço while, crie um programa que inverta uma string.
// Solicita uma string ao usuário (em ambiente de navegador)
let texto = prompt("Digite uma palavra para inverter:");
let invertida = "";
let i = texto.length - 1;

// Laço while para inverter a string
while (i >= 0) {
  invertida += texto[i];
  i--;
}

// Exibe o resultado
console.log("String invertida:", invertida);