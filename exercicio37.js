//Exercício 37: Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.
let numero = 1;
let soma = 0;

while(numero <= 10){
    soma+= numero**2;
    numero++;
}

console.log(
  "A soma dos quadrados dos 10 primeiros números naturais é: " + soma
);