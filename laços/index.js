//while
let i

while (i < 100) {
    console.log(i)
}

//exe

const num1 = 5
let x = 1
while (x <= 10) {
    console.log(`a multiplicação de ${num1} por ${x} é ${num1*x}`)
    x++
}

//exempol

for (let i=0; i < 10; i++) {
    console.log(i)
}

//exe
const numeros = [2, 3, 5, 7, 10]

for (let i = 0; i < 5; i++){
    console.log(numeros[i])
}

//exe 2

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const maiorNumero = encontarMaior(nums)

function encontarMaior(array){
    let maior = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}
console.log("o maior numero é", maiorNumero)

//FOR OF

let maior = numeros[i]
for(let nums of numeros){
    if (nums > maior){
        maior = nums
    }
    console.log(nums = nums + 2)
}

//exe03

let palavras = ["Olá", "meu", "amigo", "tudo", "bem?"]
let mensagem = ""
for (const palavra of palavras) {
    mensagem += palavra + " "
}
console.log(mensagem)
