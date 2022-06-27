// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

const array = [2, 3, 6, 7, 10, 1];

console.log(indiceMaiorNumeroDoArray(array));

function indiceMaiorNumeroDoArray(arrayPassed = []) {
    arrayPassed = (typeof array !== 'undefined') ? arrayPassed : [];
    let indexMaior = 0;

    for (let index in arrayPassed) {
        if (arrayPassed[index] >= arrayPassed[indexMaior]) {
            indexMaior = index;
        }
    }
    return indexMaior;
}