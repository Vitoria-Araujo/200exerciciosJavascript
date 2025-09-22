//Exercício 55: Escreva uma função que retorne o menor número em um array de números.
function menorNumero(array) {
  return Math.min(...array);
}

let numeros = [5, 2, 9, 1, 0, 7];
console.log(menorNumero(numeros));

