// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array = []) {

  const calback = (acc, curr) => {
    let count = 0;
    for (let i = 0; i <= curr.length; i += 1) {
      count += (`${curr[i]}`.toUpperCase() === 'A') ? 1 : 0;
    }
    return acc + count;
  }
  
  return array.reduce(calback, 0);
}


console.log(containsA(names))
