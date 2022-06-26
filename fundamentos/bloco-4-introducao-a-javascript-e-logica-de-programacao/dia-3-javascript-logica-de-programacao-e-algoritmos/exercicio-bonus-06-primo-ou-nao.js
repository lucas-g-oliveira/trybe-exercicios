const numero = 24;
let msg ='';

for (let index = numero - 1; index > 1; index -= 1) {
        msg = numero + ' É primo!'
    if (numero % index == 0) {
        msg = numero + ' Não é primo!';
        break;
    }
}
console.log(msg)