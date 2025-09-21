//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

let continuar;

do {
  // Jogador escolhe
  let jogador = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

  // Computador escolhe aleatoriamente
  let opcoes = ["pedra", "papel", "tesoura"];
  let computador = opcoes[Math.floor(Math.random() * 3)];

  alert("Computador escolheu: " + computador);

  // Verificar resultado
  if (jogador === computador) {
    alert("Empate!");
  } else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    alert("Você venceu!");
  } else {
    alert("Você perdeu!");
  }

  // Perguntar se quer jogar de novo
  continuar = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
} while (continuar === "s");

alert("Obrigado por jogar!");
