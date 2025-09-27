//Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.
function duplicarArray(array) {
  return array.map(num => num * 2);
}

// Exemplo:
let numeros = [10, 20, 30];
console.log(duplicarArray(numeros)); // saída: [20, 40, 60]
console.log(duplicarArray([1, 2, 3, 4])); // saída: [1, 4, 9, 16]
console.log(duplicarArray([-1, -2, -3])); // saída: [1, 4, 9]