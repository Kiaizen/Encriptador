let sidebar = document.getElementById("sidebar");

let cripto = document.getElementById("cripto");

let decripto = document.getElementById("decripto");

let enableCript = document.getElementById("texto");

let copyBtn = document.getElementById("copyBtn");

let resultadoCriptografar;

let resultadoDecripto;



enableCript.addEventListener("input", function () {
  cripto.disabled = enableCript.value.trim() === "";
  decripto.disabled = enableCript.value.trim() === "";
});

 function bCripto() {
  let texto = document.getElementById("texto");
  let valor = texto.value;
  resultadoCriptografar = criptografar(valor);
  sidebar.innerHTML = `<div class="sidebar__textcript"><p>${resultadoCriptografar}</p></div><button id="copyBtn" class="btn__side" onclick="bCopy()">Copiar</button>
 `;
};

function bDcripto() {
  let texto = document.getElementById("texto");
  let valor = texto.value;
  resultadoDecripto = descriptografar(valor);
  sidebar.innerHTML = `<div class="sidebar__textcript"><p>${resultadoDecripto}</p></div><button id="copyBtn" class="btn__side" onclick="bCopy()">Copiar</button>
 `;
};

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

function descriptografar(vogal) {
  vogal =vogal.replace(/enter/g, 'e');
  vogal =vogal.replace(/imes/g, 'i');
  vogal =vogal.replace(/ai/g, 'a');
  vogal =vogal.replace(/ober/g, 'o');
  vogal =vogal.replace(/ufat/g, 'u');
  return vogal
}

function bCopy() {
    navigator.clipboard.writeText(resultadoCriptografar)
}