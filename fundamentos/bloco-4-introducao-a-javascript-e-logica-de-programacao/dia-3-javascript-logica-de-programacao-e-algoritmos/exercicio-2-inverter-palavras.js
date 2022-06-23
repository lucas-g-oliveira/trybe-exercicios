const palavra = 'Trybe';
let resultado = '';

for(let letra = palavra.length; letra > 0; letra -= 1){
    resultado += palavra[letra-1];
}

console.log(resultado);