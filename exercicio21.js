//Exercício 21: Escreva um programa que determina a estação do ano com base no mês.
let mes = parseInt(prompt("Digite o mês desejado para descobrir a estação do ano:"))

if (mes == 1 || mes == 2 || mes ==3 ){
    console.log("È  Verão")    
} else if(mes == 4 || mes == 5){
    console.log("È Outono"); 
} else if(mes >= 6 && mes <= 8){
    console.log("È Inverno"); 
} else if (mes >= 9 && mes <=11){
    console.log("È Primavera"); 
} else if (mes == 12){
  console.log("É Verão")
} else {
  console.log("Mês inválido");
}