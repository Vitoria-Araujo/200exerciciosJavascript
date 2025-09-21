//Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.

let binario = "1011"; // você pode trocar por outro binário
let decimal = 0;

// percorre da esquerda para a direita
for (let i = 0; i < binario.length; i++) {
  let digito = parseInt(binario[i]); // pega cada caractere (0 ou 1)
  let potencia = binario.length - 1 - i; // calcula a potência de 2
  decimal += digito * 2 ** potencia; // soma ao resultado
}

console.log("Binário: " + binario);
console.log("Decimal: " + decimal);
