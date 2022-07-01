/*🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
    Array de teste: [2, 3, 2, 5, 8, 2, 3];.
    Valor esperado no retorno da função: 2.
*/

let arrayPassed = [2, 3, 2, 5, 8, 2, 3];

console.log(maisRepete(arrayPassed));

function maisRepete(array = []) {
    let numero = 0;

    for (let numberExt of arrayPassed) {
        let repeat = 0;
        for (let numberInt of arrayPassed) {
            repeat += (numberInt == numberExt) ? 1 : 0;
        }
        numero = (repeat > numero) ? numberExt : numero;
    }
    return numero;
}