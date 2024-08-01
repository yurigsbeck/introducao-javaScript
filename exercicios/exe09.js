// question 09

/* 1) crie um algoritmo q receba 3num em variaveis e a partir deles crie uma estrutura condicional q retorne uma msg informando
q existe dois ou mais num identicos ou no caso de todos os num serem diferentes retorne uma msg informando q hã num identicos*/
 
const n1 = 10
const n2 = 20
const n3 = 30
const cond1 = n1 === n2 || n2 === n3 || n1 === n3

if (cond1) {
    console.log("ha dois numeros identicos")
} else {
    console.log("não hã  numeros identicos")
}

/* 2) crie um algoritmo q receba uma idade em variavel e a partir dela crie uma estrutura condicional q retorne uma msg informando
se é maior ou menor de idade */

const age = 19
const cond2 = (age >= 18)

if (cond2) {
    console.log("é maior de idade")
} else {
    console.log("não há maior de idade")
}

/* 3) crie um algoritmo q receba 1 num em uma variavel e a partir dele e crie uma estrutura condicional q retorne uma msg 
informando se ele é par ou não*/

const nume1 = 10
const cond3 = (nume1 % 2) == 0

if (cond3) {
    console.log("é par")
} else {
    console.log("o numero é impar")
}