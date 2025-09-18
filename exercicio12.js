//Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
let media = parseFloat(prompt("Digite sua média:"));


if (media >= 7) {
  console.log(`Parabéns sua média é ${media} e está aprovado 🥳🥳🥳`);
} else if(media >= 5){
  console.log(`Sua média é ${media} e está Recuperaçao 😔`);
}else{
    console.log(`Sua média é ${media} e você está Reprovado 😢`);
}
