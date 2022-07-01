// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayPassed = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(returnMaiorName(arrayPassed));

function returnMaiorName(array = []) {
    let maior = '';

    for (let index = 0; index < array.length; index += 1) {   
        maior = (array[index].length > maior.length) ? array[index] : maior;
    }

    return maior;
}