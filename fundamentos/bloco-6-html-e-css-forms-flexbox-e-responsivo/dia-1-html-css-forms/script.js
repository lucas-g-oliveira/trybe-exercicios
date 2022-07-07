let inputName = document.getElementById('name-form');
let inputEmail = document.getElementById('email-form');
let destino = document.getSelection('lugar-escolhido');
let data = document.getElementById('dia');
let promoAuthorize = document.getElementById('check-nextspromo');
let useDataAuthorize = document.getElementById('authorize-search');
let botao = document.getElementById('send-form');



botao.addEventListener('click', (event) => {

    event.preventDefault();

    console.log(inputName.innerText);
    console.log(inputEmail.innerText);
    console.log(destino);
    console.log(data);
    console.log(promoAuthorize);
    console.log(useDataAuthorize);


});