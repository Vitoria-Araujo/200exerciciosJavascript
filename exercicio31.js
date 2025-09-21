//Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
let min = 1;
let max = 100;
let tentativas = 0;
let resposta = "";

alert("Pense em um número entre 1 e 100!");

// enquanto a resposta não for "certo"
while (resposta !== "certo") {
  let chute = Math.floor((min + max) / 2); // pega o meio do intervalo
  tentativas++;

  resposta = prompt(
    "Seu número é " + chute + "?\nDigite: 'maior', 'menor' ou 'certo'"
  ).toLowerCase();

  if (resposta === "maior") {
    min = chute + 1; // o número está acima do chute
  } else if (resposta === "menor") {
    max = chute - 1; // o número está abaixo do chute
  } else if (resposta === "certo") {
    alert(
      "Acertei! O número é " +
        chute +
        ". Descobri em " +
        tentativas +
        " tentativas."
    );
  } else {
    alert("Digite apenas 'maior', 'menor' ou 'certo'.");
  }
}
