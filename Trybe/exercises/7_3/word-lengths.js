// Escreva a função wordLengths para passar nos testes já implementados.
const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
    const newArr = [];
    for (let i = 0; i < array.length; i += 1) {
        newArr.push(array[i].length);
    }
    return newArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);