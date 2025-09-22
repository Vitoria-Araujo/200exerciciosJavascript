//Exercício 51: Escreva uma função que calcule o fatorial de um número.
 function fatorial(num1){
    let resultado = 1;

    for(let i = 1; i <= num1; i++){
        resultado *= i;
 }

 return resultado;
}
console.log(fatorial(5));
