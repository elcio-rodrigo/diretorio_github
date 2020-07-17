//crie uma função que receba um array de inteiros e retorne o índice do menor valor
function indexMenor(inteiros) {
    let iMenor = 0;
    for (let i in inteiros) {
        if (inteiros[iMenor] > inteiros[i]) {
            iMenor = i;
        }
    }
    return iMenor;
}
console.log(indexMenor([2, 4, 6, 7, 10, 0, -3]));