const numero = 5;
let temp = '';

for (let index = numero; index >= 1; index -= 1) {
    temp += '*';
}

for (let index = numero; index >= 1; index -= 1) {
    console.log(temp);
}