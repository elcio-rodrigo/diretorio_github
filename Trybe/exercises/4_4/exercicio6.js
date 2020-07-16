// verifica se uma palavra é palíndromo
function palindromo(palavra) {
    let arrayLetras = palavra.split("");
    let ehPalindromo = true;
    for (let i in arrayLetras) {
        if (arrayLetras[i] != palavra[(palavra.length - 1) - i]) {
            ehPalindromo = false;
        }
    }
    return ehPalindromo;
}
console.log(palindromo("arara"));
console.log(palindromo("desenvolvimento"));
