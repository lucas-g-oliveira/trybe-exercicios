let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont_imp = 0;

for (data of numbers) {
    if ((data % 2) != 0) {
        cont_imp += 1;
    }
}

if (cont_imp > 0) {
    console.log('Numeros impares: '+cont_imp);
}else{
    console.log('Nenhum valor ímpar encontrado');
}