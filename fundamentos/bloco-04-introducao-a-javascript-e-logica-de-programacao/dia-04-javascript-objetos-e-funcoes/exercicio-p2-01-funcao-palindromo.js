/*
1 - Crie uma função que receba uma string e retorne
true se for um palíndromo, ou false, se não for.
*/

const palavra = 'pato';

console.log(palindromo(palavra));

function palindromo(word) {
    word = (typeof word !== 'undefined') ? word : 'ab';
    let wordTemp = '';
    for (let index = word.length-1; index >= 0 ; index -= 1) {
        wordTemp += word[index];
    }
    return wordTemp === word ? true : false;
}

