/*
6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/
let number = 5; 

console.log(somatorio(number));

function somatorio(n){
    let somatorio = 0;
    for(let index = 0; index <= n; index += 1){
        somatorio += index;
    }
    return somatorio;
}