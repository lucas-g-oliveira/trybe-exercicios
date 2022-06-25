const numero = 50;
let maiorPrimo = 0;


for (let index = numero; index >= 1; index -= 1) {
    for (let index2 = index - 1; index2 >= 1; index2 -= 1) {
        if (index % index2 == 0) {
            if (index2 == 1) {
                /*
                    os numeros que chegaram a ser testados pelo indice2 == 1
                    são os que não foram divisiveis por nenhum numero maior que
                    1 e nenhum numero menor que eles mesmos, ou seja; são primos.
                */
                maiorPrimo = index;
                // aqui os dois index são zerados para interromper os loops
                index = 0;
                index2 = 0;
            }
            index2 = 0;
        }
    }
}

console.log(maiorPrimo);

