// crie uma função que receba um array de nomes e retorne o nome com maior quantidade de caracteres.
function palavraMaior(palavras) {
    let palavraMaior = palavras[0];
    for (let i in palavras) {
        if (palavraMaior.length < palavras[i].length) {
            palavraMaior = palavras[i];
        }
    }
    return palavraMaior;
}
console.log(palavraMaior(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));