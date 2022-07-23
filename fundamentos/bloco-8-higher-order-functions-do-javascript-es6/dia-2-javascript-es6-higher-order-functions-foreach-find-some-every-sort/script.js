/*
7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
Copiar
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
}

*/

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

const Ex = (n, m) => {
    console.log(`\n///////////////////////////// Exercicio - ${n} ///////////////////////////////////////////`);
    console.log(m + '\n');
}
////////////////////////////////////////////////////////////////////////////////////
Ex(1, 'Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.Dica: use a função find');

function authorBornIn1947(livros = []) {
    return livros.find((e) => e.author.birthYear === 1947).author.name;
}
console.table('R: ' + authorBornIn1947(books));

//////////////////////////////////////////////////////////////////////////////////////
Ex(2, 'Retorne o nome do livro de menor nome.Dica: use a função forEach');

function smallerName(livros = []) {
    let nameBook = livros[0].name;
    // escreva aqui o seu código
    livros.forEach((e) => {
        nameBook = (e.name.length < nameBook.length) ? e.name : nameBook;
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}
console.log('R: ' + smallerName(books));

//////////////////////////////////////////////////////////////////////////////////////
Ex(3, 'Encontre o primeiro livro cujo nome possui 26 caracteres.');

const expectedResult = (livros = []) => {
    return livros.find((e) => e.name.length === 26).name;
};
console.log('R: ' + expectedResult(books));

//////////////////////////////////////////////////////////////////////////////////////
Ex(4, 'Ordene os livros por data de lançamento em ordem decrescente.');

const booksOrderedByReleaseYearDesc = books.sort((a, b) => {
    if (a.releaseYear > b.releaseYear) return 1;
    if (a.releaseYear < b.releaseYear) return -1;
    return 0;
});

booksOrderedByReleaseYearDesc.forEach((e) => console.log(`${e.releaseYear} --- ${e.name}`));

///////////////////////////////////////////////////////////////////////////////////////
Ex(5, ' Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.');

books.forEach((e) => console.log(e.author.birthYear + ' --- ' + e.author.name));

const everyoneWasBornOnSecXX = (arrayBook = []) => {
    return arrayBook.every((e) => e.author.birthYear >= 1901 && e.author.birthYear <= 2000);
}

console.log(`\nR: ${everyoneWasBornOnSecXX(books)}\n `);

////////////////////////////////////////////////////////////////////////////////////////
Ex(6, 'Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.')

const someBookWasReleaseOnThe80s = (arrayBook = []) => {
    return arrayBook.some((e) => e.releaseYear >= 1980 && e.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s(books));

/////////////////////////////////////////////////////////////////////////////////////////
Ex(7, 'Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.');

function authorUnique(array = []) {
    let arrayTemp = [];
    array.forEach((e) => { arrayTemp.push(e.author.birthYear) });
    return (arrayTemp.length === [... new Set(arrayTemp)].length) ? true : false;
}

console.log(authorUnique(books));