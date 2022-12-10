alert("Advinhe o número que estou pensando? Está entre 0 e 10");
let num = prompt("Digite o número: ");

let numRandom = Math.floor(Math.random() * 10 + 1);

let count = 1;

while (num != numRandom) {
  num = prompt("Errou, tente novamente: ");
  count++;
}

alert(`Parabéns! Você advinhou o número em ${count} tentativas`);
