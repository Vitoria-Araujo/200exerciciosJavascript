//Exercício 54: Escreva uma função que ordene um array de números em ordem decrescente
function ordenarDecrescente(array){
  array.sort(); // ordena crescente (mas trata como string!)
  array.reverse();
  return array;
}

let numeros = [100,40,60,800,1];
console.log(ordenarDecrescente(numeros))