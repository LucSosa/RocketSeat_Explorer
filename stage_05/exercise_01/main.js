const phrasesForLuck = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
];

const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");

const buttonScreenOne = document.querySelector(".buttonScreenOne");
const buttonScreenTwo = document.querySelector(".buttonScreenTwo");

const luck = document.querySelector(".luck");

buttonScreenOne.addEventListener("click", handleTryClick);
buttonScreenTwo.addEventListener("click", handleResetClick);

function handleTryClick(event) {
  event.preventDefault();

  console.log("Clicou no handleTryClick");
  luck.innerText = `${phrasesForLuck[numberRandom()]}`;
  toggleScreen();
}

function handleResetClick(event) {
  event.preventDefault();

  console.log("Clicou no handleResetClick");

  toggleScreen();
}

function toggleScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}

function numberRandom() {
  let numRandom = Math.floor(Math.random() * 10 + 1);
  return numRandom;
}
