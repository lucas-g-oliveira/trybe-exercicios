let numeroImpar = 15;

if(numeroImpar%2==0){                                                                   //tratando numero, caso inserido numero par
    numeroImpar-=1;
    console.log('Apenas numeros Impares! Arredondamos para : '+numeroImpar+'\n\n');
}

for (let index = numeroImpar; index >= 1; index -= 1) {                                 //imprime a linha inteira

    let temp = '';

    for (let index2 = 1; index2 <= numeroImpar; index2 += 1) {                          // incrementa o index2 na lista

        if (
            (index == index2)                                                           //diagonal supEsq -> infDir
            ||
            (index == 1)                                                                //base
            ||
            (index + index2 == numeroImpar + 1)                                         //diagonal infDir -> supEsq (formando X)
        ) {
            temp += '*';

        } else if (index - 1 >= (numeroImpar + 1) / 2) {                                //o 'index' decrementa até a metade de numeroImpar arredondado pra cima(altura do triângulo),

            break;                                                                      // e encerra o loop, não permitindo a inserção de 'espacos-vazios'.

        } else {
            temp += ' ';                                                                //como ainda não atingiu a altura esperada, tudo o que não receber '*', passa a receber ' '
        }
    }

    temp.length > 1 ? console.log(temp) : '';                                           //impede que o cosole.log() imprima linhas vazias e imprime as linhas que possui asterisco
}