//Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.
let nota = parseFloat(prompt("Digite a nota do aluno:"));

if (nota >= 9) {
  console.log("Classificação: Excelente 🥳");
} else if (nota >= 7) {
  console.log("Classificação: Bom / Aprovado 😀");
} else if (nota >= 5) {
  console.log("Classificação: Recuperação 😐");
} else {
  console.log("Classificação: Reprovado 😢");
}
