//Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.
function duplicarArray(array) {
  return array.map((num) => num * 2);
}

// Exemplo:
let numeros = [10, 20, 30];
console.log(duplicarArray(numeros)); // saída: [20, 40, 60]
