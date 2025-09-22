//Exercício 50: Escreva uma função que aceite uma string como argumento e retorne a string invertida.

function palavraInvertida(palavra){
    return palavra.split("").reverse().join("");

}

console.log(palavraInvertida("amada"));