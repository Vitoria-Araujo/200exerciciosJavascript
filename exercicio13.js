//Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem 
// indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
let peso = parseFloat(prompt("Digite o seu peso:"))
let altura = parseFloat(prompt("Digite sua altura:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`);
} else if (imc < 25) {
  console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`);
} else if (imc < 30) {
  console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`);
} else {
  console.log(`Seu IMC é ${imc.toFixed(2)}. Você está obeso.`);
}

