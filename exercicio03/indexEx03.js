/*
Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20

O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.

dica: de uma olhadinha no for.

Realize o commit do exercício resolvido.
*/

var valor = parseInt(prompt('Informe o valor: '));

if(isNaN(valor)){
    alert('Número Inválido')
} else{
    for (i = 0; i <= 10; i++) {
     alert(valor + ' x ' + i + " = " + valor * i);
    }
} 
// else { Exemplo Professora Thaís
//     var resultado = '';
//     for (i = 0; i <= 10; i++) {
//      resultado += valor + ' x ' + i + " = " + valor * i + '\n';
//      resultado += `${valor} x ${i} = ${valor * i} \n`;
//     }
//     alert(resultado);
// }