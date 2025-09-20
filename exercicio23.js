let corSemaforo = prompt("Digite a cor do semáforo(vermelho, amarelo e verde):").toLowerCase();

if (corSemaforo == "vermelho") {
  console.log(`${corSemaforo} Pare! 🚫`);

} else if (corSemaforo == "amarelo") {
  console.log(`${corSemaforo} Atenção! ⚠️`);

}else if ( corSemaforo == "verde"){
    console.log(`${corSemaforo} Siga! ✅`);

} else{
    console.log("Digite uma cor válida: vermelho, amarelo ou verde")
}