/*
Utilizando estrutura de repetição, some os números digitados através do prompt enquanto o número for diferente de -1,
quando digitado -1 pare de exibir o prompt e exiba através de um alert o resultado da soma dos números digitados.
Realize o commit do exercício resolvido.
*/

var contador = 0;
var valor1 = parseInt(prompt('Digite um valor: '));
var valor2 = parseInt(prompt('Digite outro valor: '));
var soma;

while (contador >=-1) {
  soma = valor1 + valor2;
  contador--;
}
alert(soma);
alert('Fim do cálculo');