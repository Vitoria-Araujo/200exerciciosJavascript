//Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.
function somaImpares(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) { // verifica se é ímpar
      soma += array[i];
    }
  }
  return soma;
}


let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(somaImpares(numeros)); 