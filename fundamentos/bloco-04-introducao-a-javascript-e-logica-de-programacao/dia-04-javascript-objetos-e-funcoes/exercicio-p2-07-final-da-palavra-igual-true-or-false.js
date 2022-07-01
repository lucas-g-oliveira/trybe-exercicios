/*
7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be');
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false
*/

let word = 'trybe';
let ending = 'be';

console.log(finalPalavras(word, ending));


function finalPalavras(palavra, final) {
    let difWordsSize = 0;
    difWordsSize = parseInt(palavra.lenght);
    console.log('palabra: ' + palavra + ' lenght: ' + palavra.length);
    console.log('palabra: ' + final + ' lenght: ' + final.length);
    console.log(difWordsSize);

    

    console.log('dif: ' + difWordsSize);

    for (index = 0; index > final.lenght; index += 1) {
        console.log(palavra[difWordsSize + index] + '  |  ' + final[index])
        if (palavra[difWordsSize + index] != final[index]) {
            return 'false'
        } else {
            return 'true';
        }
    }
}
