//usando o readline, os numeros devem ser inseridos pelo usuario

const readlineSync = require('readline-sync')

let v1 = Number(readlineSync.question('qual o valor do primeiro numero?'))
let v2 = Number(readlineSync.question('qual o valor do segundo numero?'))

function soma(num1, num2){
    let soma = num1 + num2
     console.log(soma)
 }
 soma(v1,v2)

//exe02

const nome = readlineSync.question('qual o seu nome?')
const age = Number(readlineSync.question('qual a sua idade?')) 

function frase(me, idade){
    let dados = `meu nome é ${me}, tenho ${idade} anos de idade`
    return dados
}
console.log(frase(nome,age))