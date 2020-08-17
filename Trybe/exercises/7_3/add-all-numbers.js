// Escreva a função addAllnumbers para passar nos testes já implementados.
const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = (array) => {
    let allNumbers = 0;
    for (let i = 0; i < array.length; i += 1) {
        allNumbers += array[i];
    }
    return allNumbers;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);