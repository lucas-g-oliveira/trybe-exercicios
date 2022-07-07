let inputName = document.querySelector('#name-form');
let inputEmail = document.querySelector('#email-form');
let destino = document.getElementsByName('lugar-escolhido');
let data = document.querySelector('#dia');
let promoAuthorize = document.querySelector('#check-nextspromo');
let useDataAuthorize = document.querySelector('#authorize-search');

let botao = document.querySelector('#send-form');


botao.addEventListener('click', (event) => {

    event.preventDefault();

    console.log('Nome: ' + inputName.value);
    console.log('Email: ' + inputEmail.value);
    console.log('Data: ' + data.value);
    console.log('Mais promoçoes: ' + promoAuthorize.value);
    console.log('Uso de dados: ' + useDataAuthorize.value);

   // console.log(destino[0].value);    
    
    if(destino[0].checked){

        console.log('destino: '+destino[0].value);

    }else if(destino[1].checked){

        console.log('destino: Campo');
    }
    else if(destino[2].checked){

        console.log('destino: Praia');
    }
    else if(destino[3].checked){
        
        console.log('destino: Montanhas');
    }
});