const botaomostrarpalavras = document . querySelector("#botao-palavrachave");

botaomostrarpalavras.addEventListener("click", mostrapalavraschave);

function mostrapalavraschave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const camporesultado = document.querySelector("#resultado-palavrachavve")
    const palavrachave =processaTexto(texto);
 
 camporesultado.textContent = palavras.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

 let frequencias = {};
 for (let I of palavras) {
     frequencia[1] =0;
         for (let j of palavras) {
              if(i==j) {
                  frequencias[i]++;
              }
        }
 }         
    return palavras;
}
<!--