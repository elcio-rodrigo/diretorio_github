// crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function numRepetido(inteiros) {
    let repetido = 0;
    let numero = 0;
    let iNumero = 0;
    for (let i in inteiros) {
        let verificaNumero = inteiros[i];
        for (let i2 in inteiros) {
            if (verificaNumero === inteiros[i2]) {
                numero++;
            }
        }
        if (numero > repetido) {
            repetido = numero;
            iNumero = i;
        }
        numero = 0
    }
    return inteiros[iNumero];
}
console.log(numRepetido([2, 3, 2, 5, 8, 2, 3]))