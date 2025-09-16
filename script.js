const botaomostrarpalavras = document . querySelector("#botao-palavrachave");

botaomostrarpalavras.addEventListener("click", mostrapalavraschave);

function mostrapalavraschave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const camporesultado = document.querySelector("#resultado-palavrachavve")
    const palavrachave =processaTexto(texto);
 
 camporesultado.textContent = palavras;
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}