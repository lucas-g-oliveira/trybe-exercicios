let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];

for(data of numbers){
    if(data > maior){
        maior = data;
    }
}


console.log('Maior: '+maior);