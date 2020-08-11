// retornar a maior palavra
// const longestWord = texto => {
//     let palavras = texto.split(' ');
//     let letras = 0;
//     let resultado = '';
//     for (const i of palavras) {
//         if (i.length > letras) {
//             letras = i.length;
//             resultado = i;
//         }
//     }
//     return resultado;
// }
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
// retornar a maior palavra em uma linha
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));