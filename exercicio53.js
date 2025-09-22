// Exercício 53: Verificar se um número é primo
function ehPrimo(numero) {
  if (numero <= 1) return false; // 0 e 1 não são primos

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; // achou divisor → não é primo
    }
  }

  return true; // se não encontrou divisor, é primo
}

// Testes
console.log(ehPrimo(2));  // true
console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false
