let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

//achar a maior e a menor palavra

for (index = 0; index < array.length; index += 1) {
    //maior
    if (array[index].length > maior.length) {
        maior = array[index];
    }
    //menor
    if (array[index].length < menor.length) {
        menor = array[index];
    }
}

console.log('Maior: ' + maior);
console.log('Menor: ' + menor);