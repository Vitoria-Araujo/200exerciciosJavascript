// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let n1 = 0,
  n2 = 1,
  proximo;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
  console.log(n1); // imprime o número atual
  proximo = n1 + n2; // calcula o próximo
  n1 = n2; // avança uma posição
  n2 = proximo;
}
