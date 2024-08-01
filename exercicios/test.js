//exe1

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite os números separados por espaços: ', (input) => {
    const numeros = input.split(' ').map(Number);
    const maiorNumero = encontrarMaiorNumero(numeros);
    console.log("O maior número é:", maiorNumero);
    rl.close();
});

function encontrarMaiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}