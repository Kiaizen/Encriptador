// Elementos da DOM
const sidebar = document.getElementById("sidebar");
const cripto = document.getElementById("cripto");
const decripto = document.getElementById("decripto");
const enableCript = document.getElementById("texto");
const copyBtn = document.getElementById("copyBtn");

let resultadoCriptografar;
let resultadoDecripto;

// Event Listener para mudança de entrada
enableCript.addEventListener("input", function () {
  cripto.disabled = enableCript.value.trim() === "";
  decripto.disabled = enableCript.value.trim() === "";
});

// Função de encriptar
function encriptar() {
  let texto = document.getElementById("texto").value;
  let paragrafo = sidebar.querySelector("p");
  let imagem = sidebar.querySelector("img");
  let strong = sidebar.querySelector("strong");
  let button = sidebar.querySelector("button");
  let div = sidebar.querySelector("div");
  div.classList.remove("sidebar__text");
  div.classList.add("sidebar__textcript");
  button.style.display = "block";
  strong.style.display = "none";
  imagem.style.display = "none";
  resultadoCriptografar = criptografar(texto);
  paragrafo.textContent = resultadoCriptografar;
}

// Função de Descriptografar
function bDcripto() {
  let texto = document.getElementById("texto").value;
  resultadoDecripto = descriptografar(texto);
  let paragrafo = sidebar.querySelector("p");
  paragrafo.textContent = resultadoDecripto;
}

// Lógica de criptografar
function criptografar(vogal) {
  let txt = Array.from(vogal.toLowerCase());

  for (let index = 0; index < txt.length; index++) {
    switch (txt[index]) {
      case "e":
        txt[index] = "enter";
        break;
      case "i":
        txt[index] = "imes";
        break;
      case "a":
        txt[index] = "ai";
        break;
      case "o":
        txt[index] = "ober";
        break;
      case "u":
        txt[index] = "ufat";
        break;

      default:
        break;
    }
  }
  let resultado = txt.join("");
  return resultado;
}

// Lógica de descriptografar
function descriptografar(cripto) {
  cripto = cripto.replace(/enter/g, "e");
  cripto = cripto.replace(/imes/g, "i");
  cripto = cripto.replace(/ai/g, "a");
  cripto = cripto.replace(/ober/g, "o");
  cripto = cripto.replace(/ufat/g, "u");
  return cripto;
}

// Copiar para área de transferência
function bCopy() {
  navigator.clipboard.writeText(resultadoCriptografar);
}
