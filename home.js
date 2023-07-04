let button = document.getElementById("button");
let addButton = document.getElementById("addButton");
let contador = 1; // contador para gerar IDs únicos para os novos campos

function adicionarCampo() {
  let container = document.getElementById("campos-container");

  // Criação do input text
  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.name = "text" + contador;
  textInput.id = "text" + contador;
  textInput.className = "text";
  textInput.placeholder = "Ingrediente";
  container.appendChild(textInput);

  // Espaçamento
  container.appendChild(document.createTextNode(" "));

  // Criação do input number
  let numberInput = document.createElement("input");
  numberInput.type = "number";
  numberInput.name = "num" + contador;
  numberInput.id = "num" + contador;
  numberInput.className = "num";
  container.appendChild(numberInput);

  // Quebra de linha
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createElement("br"));

  contador++;
}

addButton.addEventListener("click", adicionarCampo);

button.addEventListener("click", function () {
  calcular();
});

function calcular() {
  let qnt = parseFloat(document.getElementById("qnt").value);
  let qnt1 = parseFloat(document.getElementById("qnt1").value);

  let resultadoHTML = "";

  for (let i = 1; i <= contador; i++) {
    let textInput = document.getElementById("text" + i);
    let numInput = document.getElementById("num" + i);

    if (textInput && numInput) {
      let textValue = textInput.value;
      let numValue = parseFloat(numInput.value);

      if (textValue && numValue) {
        let res = (qnt * numValue) / qnt1;
        resultadoHTML += textValue + " : " + res + " g <br><br>";
      }
    }
  }

  document.getElementById("res").innerHTML = "<br>" + resultadoHTML;
}





