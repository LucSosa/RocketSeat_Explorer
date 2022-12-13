//Variáveis
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let numRandom = Math.floor(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", reset);

// Função Callback
function handleTryClick(event) {
  //Não Faça o Padrão
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  verifyInput(inputNumber);

  if (Number(inputNumber.value) == numRandom) {
    toggleScreen();

    screenTwo.querySelector(
      "h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();

  xAttempts = 1;
  numRandom = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}

function verifyInput(inputNumber) {
  if (inputNumber.value == "") {
    alert("Tentativa inválida");
    inputNumber.value = "";
    xAttempts--;
  } else if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Tentativa inválida");
    inputNumber.value = "";
    xAttempts--;
  }
}

function reset(e) {
  if (e.key == "Enter" && screenOne.classList.contains("hide")) {
    handleResetClick();
  }
}
