//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let counter = 0;
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        counter += 1;
        results.push(counter);
      } else {
        results.push(characters[i]);
      }
    }
    return results.join('');
  };
  const assert = require('assert');
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  const output = removeVowels(parameter)
assert.strictEqual(output, result)
//   console.log(removeVowels(parameter))