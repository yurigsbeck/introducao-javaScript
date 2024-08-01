//template strings

const nomes = "yuri"
const old = "17"

console.log(`olá meu nome é ${nomes} e tenho ${old} anos`)

//tolowercase

const palavra = "oiee"

console.log(palavra.toLowerCase())

//touppercase

console.log(palavra.toUpperCase())

const pllMaiuscula = palavra.toUpperCase()

//trim

const email = "senacrs@gmail.com"

const emailFormatado= email.trim()

console.log(emailFormatado)

//includes

const frase ="hoje eu me mato, batata"

frase.includes("batata") //true
frase.includes("cenoura") //false

console.log(frase.includes("batata"))
console.log(frase.includes("cenoura"))

//replaceall

console.log(frase.replaceAll("batata", "chocolate"))

console.log(frase.replaceAll("a","x"))

//arrays

const listaDeCompras = ["arroz", "feijão", "batata"]
const listaDeNumerosMega = [2 , 13 , 26, 35, 41, 60]
console.log(listaDeCompras [1])
console.log(listaDeNumerosMega)
