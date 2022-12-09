let name = prompt("Olá, digite seu nome: ");

alert(name + " agora digite suas notas");
let noteOne = prompt("Primeira Nota:");
let noteTwo = prompt("Segunda Nota:");
let noteThree = prompt("Terceira Nota:");

noteOne = Number(noteOne);
noteTwo = Number(noteTwo);
noteThree = Number(noteThree);

let average = (noteOne + noteTwo + noteThree) / 3;

average = average.toFixed(2);

let result = average >= 6;

if (result) {
  alert(
    "Parabéns " +
      name +
      " sua nota foi: " +
      average +
      ", você passou no bimestre, continue se esforçando que será facil passar de ano"
  );
} else if (average < 3) {
  alert("Reprovado");
} else {
  alert(
    name + " sua nota foi: " + average + " estude para a prova de recuperação"
  );
}
