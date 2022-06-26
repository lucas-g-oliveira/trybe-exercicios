/*
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves)
do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain,
Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima
os valores de cada objeto juntos de acordo com cada uma das chaves.:
*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (chave in info) {

    if (info[chave] === info2[chave] && chave == "recorrente") {

        if (info2[chave] == 'Sim') {
            console.log('Ambos ' + chave + 's')
        } else if (info2[chave] == 'Não') {
            console.log('Ambos não' + chave + 's')
        } else {
            console.log('recorrente? ' + info[chave] + ' e ' + info[chave])
        }

    } else {
        console.log(info[chave] + ' e ' + info2[chave]);
    }


}