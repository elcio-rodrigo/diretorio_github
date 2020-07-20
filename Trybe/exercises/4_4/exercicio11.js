// crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaNumeros(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    return soma;
}
console.log(somaNumeros(5));