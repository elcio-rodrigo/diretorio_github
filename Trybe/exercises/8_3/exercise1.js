// // Dada uma matriz de matrizes, transforme em uma única matriz.
    
// const assert = require('assert');

// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];


// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }
// // console.log(flatten());
// assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
const nationality = ({ firstName, nationality }) => (nationality) ? `${firstName} is ${nationality}` : `${firstName} is Brazilian`;

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))