//Exercício 28: Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.
let numero = 1; // começa do 1
let soma = 0; // acumulador, começa em 0

while (numero <= 100) {
  soma += numero; // soma = soma + numero
  numero++; // incrementa o número (vai para o próximo)
}

console.log("A soma de 1 até 100 é: " + soma);
