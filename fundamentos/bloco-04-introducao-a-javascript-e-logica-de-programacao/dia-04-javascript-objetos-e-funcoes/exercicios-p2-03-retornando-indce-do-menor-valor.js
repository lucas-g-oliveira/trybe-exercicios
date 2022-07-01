// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

const array = [2, 4, 6, 7, 10, 0, -3];

console.log(indiceMaiorNumeroDoArray(array));

function indiceMaiorNumeroDoArray(arrayPassed = []) {
    arrayPassed = (typeof array !== 'undefined') ? arrayPassed : [];
    let indexMaior = 0;

    for (let index in arrayPassed) {
        if (arrayPassed[index] <= arrayPassed[indexMaior]) {
            indexMaior = index;
        }
    }
    return indexMaior;
}