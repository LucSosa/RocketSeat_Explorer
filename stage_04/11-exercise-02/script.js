students = [
  {
    name: "João",
    noteOne: 6,
    noteTwo: 6,
  },
  {
    name: "Leticia",
    noteOne: 7,
    noteTwo: 7,
  },
  {
    name: "Diego",
    noteOne: 10,
    noteTwo: 8,
  },
  {
    name: "Julia",
    noteOne: 7,
    noteTwo: 4,
  },
];

function mediaStudent(noteOne, noteTwo, nameStudent) {
  let media = (noteOne + noteTwo) / 2;

  if (media >= 7) {
    return `
    A média do(a) aluno(a) ${nameStudent} é: ${media} \n
    Parabéns ${nameStudent}!, você foi aprovado(a) no concurso!`;
  } else {
    return `
    A média do(a) aluno(a) ${nameStudent} é: ${media} \n
    Não foi dessa vez, ${nameStudent}! Tente novamente!`;
  }
}

for (let student of students) {
  alert(`${mediaStudent(student.noteOne, student.noteTwo, student.name)}`);
}
