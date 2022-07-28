// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array = []) {
  const fxCalback = (acc, curr) => {
    for (let value of curr) {
      acc.push(value)
    }
    return acc;
  }
  return array.reduce(fxCalback, [])
}

console.log('Reduce:        :' + flatten(arrays))

console.log('spread operator:      ' + [...arrays[0], ...arrays[1], ...arrays[2]])