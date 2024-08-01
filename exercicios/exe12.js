//01
const readlineSync = require('readline-sync')
const nome = readlineSync.question('qual seu nome? ')
const cor = readlineSync.question('qual seu cor favorita? ')
const frase = "Olá " + nome + " sua cor favorita é " + cor
console.log(`Olá, ${nome}, a sua cor favorita é ${cor}`)
console.log(frase)

//02

const dogs = ["Golden", "Dalmata", "pitbull", "PastorAlemão", "viralata"]
const escolha = readlineSync.question('qual um numero d 0 a 4 ')

console.log(dogs[escolha])
