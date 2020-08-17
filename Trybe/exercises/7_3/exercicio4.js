const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro');
assert.deepStrictEqual(myFizzBuzz(3), 'fizz', 'Erro');
assert.deepStrictEqual(myFizzBuzz(5), 'buzz', 'Erro');
assert.deepStrictEqual(myFizzBuzz(4), 4, 'Erro');
assert.deepStrictEqual(myFizzBuzz('15'), false, 'Erro');