//Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.
// Exercício 41: Decimal para Binário com do-while

let numero = 10; // você pode trocar o valor
let binario = "";

do {
  let resto = numero % 2;          // pega o resto da divisão por 2
  binario = resto + binario;       // adiciona o resto na frente da string
  numero = Math.floor(numero / 2); // divide por 2 (parte inteira)
} while (numero > 0);

console.log("Binário: " + binario);
