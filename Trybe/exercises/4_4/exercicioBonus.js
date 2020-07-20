// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa
function romanos(numRomano) {
    let numRoma = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let numeros = [];
    let resultado = 0;
    for (let i in numRomano) {
        numeros[i] = numRoma[numRomano[i]];
    }
    for (let i in numeros) {
        if (numeros[i] < numeros[i + 1]) {
            numeros[i + 1] = numeros[i + 1] - numeros[i];
        } else {
            resultado += numeros[i];
        }
    }
    return resultado;
}
console.log(romanos("MMXVIII"));