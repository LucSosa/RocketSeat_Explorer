alert("Olá, você terá que inserir dois números após essa mensagem!");

let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

let result = numberOne + numberTwo;
alert(`A soma dos dois números é: ${result}`);
result = numberOne - numberTwo;
alert(`A subtração dos dois números é: ${result}`);
result = numberOne * numberTwo;
alert(`A multiplicação dos dois números é: ${result}`);
result = numberOne / numberTwo;
alert(`A divisão dos dois números é: ${result}`);
result = numberOne % numberTwo;
alert(`A resto dos dois números é: ${result}`);

if (result == 0) {
  alert("A soma dos dois números par");
} else {
  alert("A soma dos números é ímpar");
}

if (numberOne == numberTwo) {
  alert("Os dois números são iguais");
} else {
  alert("Os dois números são diferentes");
}
