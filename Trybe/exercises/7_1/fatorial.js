const fatorial = numero => {
    let resultado = 1;

    for (let i = 2; i <= numero; i += 1) {
        resultado *= i
    }

    return resultado;
}
console.log(fatorial(5))
// forma recursiva
const fatorial1 = numero => numero > 1 ? numero * fatorial(numero - 1) : 1
console.log(fatorial1(5));
