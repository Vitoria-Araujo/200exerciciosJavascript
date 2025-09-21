//Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.
// Exercício 44: Soma de duas matrizes com do-while

let A = [
  [1, 2],
  [3, 4]
];

let B = [
  [5, 6],
  [7, 8]
];

let C = []; // matriz resultado

let i = 0;
do {
  let j = 0;
  C[i] = []; // cria a linha da matriz resultado

  do {
    C[i][j] = A[i][j] + B[i][j]; // soma elemento por elemento
    j++;
  } while (j < A[i].length);

  i++;
} while (i < A.length);

console.log("Matriz A:", A);
console.log("Matriz B:", B);
console.log("Matriz Soma:", C);
