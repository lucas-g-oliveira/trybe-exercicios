let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let new_array = [];

for (let index = 0; index < numbers.length; index += 1){

    if(index == numbers.length-1){
        new_array.push(numbers[index]*2);
        break;
    }{
        new_array.push(numbers[index]*numbers[index+1]);
    }

}

console.log(new_array);