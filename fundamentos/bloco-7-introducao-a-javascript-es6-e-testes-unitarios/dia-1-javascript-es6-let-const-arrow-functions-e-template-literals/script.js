/*
    🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

1 - Modifique a estrutura da função para que ela seja uma arrow function;
2 - Modifique as variáveis para que respeitem o escopo onde estão declaradas;
3 - Modifique as concatenações para template literals.
*/

const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
-Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
-Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
-Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
-Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/


// Seu código aqui.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
sortArray(oddsAndEvens);

function sortArray() {
    let arrayTemp = oddsAndEvens.sort((a, b) => { return a - b; });

    for (let index in arrayTemp) {
        oddsAndEvens[index] = arrayTemp[index];
    }
}

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!".`);
