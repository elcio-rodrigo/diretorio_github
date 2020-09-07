const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const arr2 = [6, 7, 8, 9]
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Erro');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Erro');
myRemoveWithoutCopy(arr2, 7);
assert.strictEqual(arr2.length, 3, 'erro');
assert.deepStrictEqual(myRemoveWithoutCopy([1,2, 3, 4], 5), [1, 2, 3, 4], 'Erro');