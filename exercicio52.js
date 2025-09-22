//Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci.
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    resultado;

  for (let i = 2; i <= n; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
  }

  return b;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
