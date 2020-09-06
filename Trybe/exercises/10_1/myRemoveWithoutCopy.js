// myRemoveWithoutCopy.js
const myRemoveWithoutCopy = (arr, item) =>
  arr.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );

module.exports = myRemoveWithoutCopy;

console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));