/*
Faça 3 prompts ao usuário:
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.
Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.
*/

var calculo = prompt('Informe o cálculo que deseja fazer: “+”, “-”, “*” ou “/”');
var numero1 = parseInt(prompt('Informe o primeiro valor: '));
var numero2 = parseInt(prompt('Informe o segundo valor: '));

switch (calculo) {
    case '+':
        soma = numero1 + numero2;
        alert('O resultado do seu cálculo é: ' + soma);
        alert('Fim do cálculo!');
        break;
    case '-':
        menos = numero1 - numero2;
        alert('O resultado do seu cálculo é: ' + menos);
        alert('Fim do cálculo!');
        break;
    case '*':
        multi = numero1 * numero2;
        alert('O resultado do seu cálculo é: ' + multi);
        alert('Fim do cálculo!');
        break;
    case '/':
        divi = numero1 / numero2;
        alert('O resultado do seu cálculo é: ' + divi);
        alert('Fim do cálculo!');
        break;
    default:
        console.log('Cálculo não realizado!');
}