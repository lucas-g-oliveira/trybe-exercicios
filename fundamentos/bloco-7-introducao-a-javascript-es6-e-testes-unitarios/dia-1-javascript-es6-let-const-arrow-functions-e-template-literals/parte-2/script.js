/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// PARTE 2 - EXERCICIO - 1 ///////////////////////////////////////////////////

// PARTE 2 // 1 - Crie uma função que receba um número e retorne seu fatorial.
//Feito
const fatorial = (numero) => {
    let temp = 1;
    for (let num = numero; num >= 1; num -= 1) {
        temp *= num;
    }
    return temp;
}

console.log(fatorial(4));

// PARTE 2 // 2 - Crie uma função que receba uma frase e retorne a maior palavra.


// OPCIONAL


// PARTE 2 //  3 - Foguetinho -  Crie uma página com um contador de cliques (DO HTML - descomentar quando necessário)
/*

const button = document.getElementById("buton-click");
const contador = document.getElementById("contador");
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount += 1;
    contador.innerText = clickCount;
});
*/

// PARTE 2 //  4 Foguetinho - Crie duas funções JavaScript com as seguintes especificações:

const changeTheX = (nome) => {
    const frase = 'Tryber x aqui!';

    let newPhrase = '';
    for (char of frase) {
        newPhrase += (char === 'x') ? nome : char;
    }
    return newPhrase;
}

const skillsFx = (fx) => {
    const skills = ['DOM', 'JS', 'CSS'];
    retorno = ``;

    retorno += `${fx}\n`;
    retorno += `Minhas 3 principais habilidades são: \n`;

    for (let data of skills) {
        retorno += ` * ${data}\n`;
    }
    return retorno;
}

console.log(skillsFx(changeTheX('Lucas')));
