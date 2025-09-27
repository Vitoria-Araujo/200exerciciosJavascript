//Exercício 58: Escreva uma função que retorne a soma de todos os números pares em um array de números.
function somaPares(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      // verifica se é par
      soma += array[i];
    }
  }
  return soma;
}

// Exemplo de uso:
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(somaPares(numeros)); // saída: 12 (2 + 4 + 6)
