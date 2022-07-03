/*
Aprofunde seus conhecimentos
Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:

1 - Cor de fundo da tela;
2 - Cor do texto;
3 - Tamanho da fonte;
4 - Espaçamento entre as linhas do texto;
5 - Tipo da fonte (Font family).

Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
Bônus
As propriedades descritas acima são obrigatórias, mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora da experiência da pessoa que lê em sua página.
*/

/*
como farei?

1 - criarei o layout simples da pagina aplicando grid-layout e o outro que esqueci no css, usarei o outro projeto pra me basear
2 - usarei botões criados no fotoshop para ficar mais intuitivo
3 - usarei uma unica função para manipular os dados do json e da lista temporario ("caso eu coloque lista")
4 - colocarei um modo noturno, trocando as classes padrão, porém mantendo a fonte
5 - o icone da imagem deve mudar (só atribuir outro endereço do link da imagem)
*/

let objThermes = {
    "dark": { 'rgb-pri': 'rgb(255, 255, 255)', 'rgb-sec': 'rgb(0, 0, 0)', },
    "purple": { 'rgb-pri': 'rgb(245, 110, 243)', 'rgb-sec': 'rgb(108, 0, 147)', },
    "green": { 'rgb-pri':'rgb(141, 230, 160)', 'rgb-sec':'rgb(0, 92, 15)', },
    "blue": { 'rgb-pri': 'rgb(139, 193, 255)', 'rgb-sec': 'rgb(2, 31, 140)', },
};

//fontPresset recebe uma lista, pq quando o numero de cliques chegar ou limite, é melhor pra reiniciar
let fontsPresets = [
    "'Arial', 'Helvetica', 'sans-serif'",
    "'Helvetica','sans-serif'",
    "'Times New Roman', 'Times', 'serif'",
    "'Courier New', 'Courier', 'monospace'",
    "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'",
    "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'"
];

let fontSizeP = {
    'min': 10,
    'max': 30,
    //'current':14,
    //correr de 2px em 2px
    //fontTitle == 2x fontSizeP
}

let lineHeight = {
    'min': 10,
    'max': 40,
    //'current':20,
    //correr de 5px em 5px
}

//////////////////////////////////////
//modelo de dados do localStorage
let objJasonDefault = {
    "font-family-storage": fontsPresets[0],
    "font-sizeP-storage": 14,
    "line-height-storage": 20,
    "color-theme-storage": "dart",
    "theme-invert": true,
}

let objJasonReset = {
    "font-family-storage": fontsPresets[0],
    "font-sizeP-storage": 14,
    "line-height-storage": 20,
    "color-theme-storage": "dart",
    "theme-invert": true,
}

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------------------
// funcao a ser chamada ao carregar a pagina
function getStorageOnOpen(){
    if (localStorage.getItem('userPersistantData') == null) {
        localStorage.setItem('userPersistantData', JSON.stringify(objJasonDefault));
    } else {
        objJasonDefault = localStorage.getItem('userPersistantData');
    }
}

//funçao que sobrescreve o local storage com o jason atualizado
function updateStorage(){
    localStorage.setItem('userPersistantData', JSON.stringify(objJasonDefault));
}


//----------------Acima, funçoes de modelos de dados e armazenamento -----------------------
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//---------------Abaixo, elementos carregamento inicial-------------------------------------


//criando os botões de cores
let divNav = document.querySelector('nav');

for (data in objThermes) {
    let rgbPri = objThermes[data]['rgb-pri'];
    let rgbSec = objThermes[data]['rgb-sec'];
    let divButton = document.createElement('div');
    divButton.classList.add('div-button');
    divButton.id = data;

    //se o tema está invertido, e é representado por essa div
    if (objJasonDefault["theme-invert"]==true && data == objJasonDefault["color-theme-storage"]) {
        divButton.style.backgroundColor = rgbSec;
        divButton.style.borderColor = rgbPri;
    }else{
        divButton.style.backgroundColor = rgbPri;
        divButton.style.borderColor = rgbSec;
    }

    divNav.addEventListener('click',setThemeColor);

    divNav.appendChild(divButton);
}

//estilizando o texto e titulo pelo meuObjeto
let titleTag = document.querySelector('.title-class');
let backgroundReader = document.querySelector('.container');
let pharagrafs = document.querySelector('.container');

pharagrafs.style.fontFamily = objJasonDefault["font-family-storage"];
pharagrafs.style.fontSize = objJasonDefault["font-sizeP-storage"]+'px';
pharagrafs.style.lineHeight = objJasonDefault["line-height-storage"]+'px';

if(objJasonDefault["theme-invert"]==true){
    titleTag.style.color = objThermes[objJasonDefault["color-theme-storage"]];['rgb-pri'];
    backgroundReader.style.backgroundColor = objThermes[objJasonDefault["color-theme-storage"]]['rgb-pri'];
    pharagrafs.style.color = objThermes[objJasonDefault["color-theme-storage"]]['rgb-sec'];
}else{
    titleTag.style.color = objThermes[objJasonDefault["color-theme-storage"]]['rgb-pri'];
    backgroundReader.style.backgroundColor = objThermes[objJasonDefault["color-theme-storage"]]['rgb-sec'];
    pharagrafs.style.color = objThermes[objJasonDefault["color-theme-storage"]]['rgb-pri'];
}

//------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------------

let btnSizeUp = document.querySelector('#size-up');
let btnSizeDown = document.querySelector('#size-down');
let btnFont = document.querySelector('#font-change');
let btnSpaceBetwenLines = document.querySelector('#space-line');
let btnColors = document.querySelector('.div-button')

btnSizeUp.addEventListener('click',setFontSizeUp);
btnSizeDown.addEventListener('click',setFontSizeDonw);
btnFont.addEventListener('click',setFontFamily);
btnSpaceBetwenLines.addEventListener('click',setSpaceBetwenLines);


function setFontSizeUp(event){
    //console.log(event.target);
    objJasonDefault;
    

    updateStorage();
}

function setFontSizeDonw(event){
    objJasonDefault;


    updateStorage();
}

function setFontFamily(event){
    objJasonDefault;


    updateStorage();
}

function setSpaceBetwenLines(event){
    objJasonDefault;


    updateStorage();
}



function setThemeColor(event){
    //fazer aqui a magica do inverter
    //id já ccapiturado no console log abaixo

   objJasonDefault;

   console.log(event.target.id);

   updateStorage();
}


