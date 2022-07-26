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

/*
  🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
  Dica: cada inicial termina com um ponto.
  Copiar
  const expectedResult = 'O Senhor dos Anéis';
  */

function fxCountPoint(srting) {
  let acc = 0;
  for (let i = 0; i <= 7; i += 1) {
    acc += (srting[i] === '.') ? 1 : 0;
  }
  return (acc === 3) ? true : false;
}

function authorWith3DotsOnName(array = []) {
  return array
    .filter((e) => (fxCountPoint(e.author.name)))
    .map((e) => e.name);
}

console.log(authorWith3DotsOnName(books));

module.exports = { authorWith3DotsOnName };