//Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.

function numParOrImpar(num1){
   if( num1 %2 === 0){
        return "Par";
   } else{
        return "impar"
   }     

 }
 console.log(numParOrImpar(10));
 console.log(numParOrImpar(7));


