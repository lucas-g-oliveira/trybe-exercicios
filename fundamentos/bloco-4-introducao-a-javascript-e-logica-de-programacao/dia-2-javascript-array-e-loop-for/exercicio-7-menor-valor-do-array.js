let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (data of numbers) {
    if (menor > data) {
        menor = data;
    }
}

console.log('Menor: '+menor);