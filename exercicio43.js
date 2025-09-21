// Exercício 43: Usando um laço while, crie um programa que determine 
// se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).
let numero = 121; // você pode trocar o número
let original = numero;
let reverso = 0;

while (numero > 0) {
  let digito = numero % 10; // pega o último dígito
  reverso = reverso * 10 + digito; // constrói o número invertido
  numero = Math.floor(numero / 10); // remove o último dígito
}

if (original === reverso) {
  console.log(original + " é um palíndromo!");
} else {
  console.log(original + " não é um palíndromo!");
}
