let new_array =[];

//criando array do 1 ao 25 em 'new_array'
for(let index = 0; index < 25 ; index += 1){
    new_array.push(index+1);
}

for(data of new_array){
    console.log(data+' / 2 = '+data/2);
}