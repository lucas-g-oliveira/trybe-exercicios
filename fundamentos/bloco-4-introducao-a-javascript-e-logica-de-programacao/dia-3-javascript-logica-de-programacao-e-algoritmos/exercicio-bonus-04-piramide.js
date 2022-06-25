const numero = 5;


for (let index = numero; index >= 1; index -= 1) {

    let temp = '';

    for (let index2 = 1; index2 <= numero; index2 += 1) {

        if ((index2 >= index) && (index2 <= (numero + 1) - index)) {
            temp += '*';
        } else {
            temp += ' ';
        }
    }

    console.log(temp);
    temp = '';

}