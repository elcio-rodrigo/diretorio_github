//crie uma função que receba um array de inteiros e retorne o índice do maior valor
function indexMaior(inteiros) {
    let iMaior = 0;
    for (let i in inteiros) {
        if (inteiros[iMaior] < inteiros[i]) {
            iMaior = i;
        }
    }
    return iMaior;
}
console.log(indexMaior([2, 3, 6, 7, 10, 1]));