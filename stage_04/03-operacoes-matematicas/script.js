alert("Captura de números");

let result;

let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

result = numberOne + numberTwo;
alert("Soma = " + result);
result = numberOne - numberTwo;
alert("Diminuição = " + result);
result = numberOne * numberTwo;
alert("Multiplicação = " + result);
result = numberOne / numberTwo;
alert("Divisão = " + result);
result = numberOne % numberTwo;
alert("Resto divisão = " + result);
