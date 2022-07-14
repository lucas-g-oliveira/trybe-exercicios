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

