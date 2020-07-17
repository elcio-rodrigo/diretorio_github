// crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaFinalPalavra(palavra, final) {
    palavra = palavra.split("");
    final = final.split("");
    verifica = true;
    for (let i = 0; i < final.length; i++) {
        if (palavra[palavra.length - final.length + i] != final[i]) {
            verifica = false;
        }
    }
    return verifica;
}
console.log(verificaFinalPalavra("trybe", "be"));
console.log(verificaFinalPalavra("joaofernando", "fernan"));