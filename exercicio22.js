//Exercício 22: Escreva um programa que determina o número de dias em um mês.
let mes = parseInt(prompt("Digite o número do mês (1 a 12):"));
let ano = parseInt(prompt("Digite o ano:")); // pra checar se fevereiro é bissexto
let dias;

if (
  mes === 1 ||
  mes === 3 ||
  mes === 5 ||
  mes === 7 ||
  mes === 8 ||
  mes === 10 ||
  mes === 12
) {
  dias = 31;
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  dias = 30;
} else if (mes === 2) {
  // Verificação de ano bissexto
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    dias = 29;
  } else {
    dias = 28;
  }
} else {
  dias = "Mês inválido!";
}

console.log("O mês " + mes + " do ano " + ano + " tem " + dias + " dias.");
