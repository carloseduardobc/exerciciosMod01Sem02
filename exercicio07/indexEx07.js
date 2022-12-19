/*
Percorra os números de o a 1000 e exiba no console os números primos e ao final a quantidade de números primos que existem nesse
intervalo.
Realize o commit do exercício resolvido.
*/

var quantidade = 0;

for(var i = 2; i <=1000; i++){
    var numprimo = true;
    for(var j = 2; j < i; j++){
        if(i % j === 0){
            numprimo = false;
            break;
        }
    }

    if(numprimo){
        quantidade += 1;
        console.log (i);
    }
}

console.log('Quantidade: ', quantidade);