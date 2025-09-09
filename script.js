
const botaomostrarpalavras = document . querySelector("#botao-palavrachave");

botaomostrarpalavras.addEventListener("click", mostrapalavraschave);

function mostrapalavraschave() {
 const texto = document.querySelector("#entrada-de-texto").value;

 const camporesultado = document.querySelector("#resultado-palavrachavve")

 const palavras = texto.split(" ");

 camporesultado.textContent = palavras;
}