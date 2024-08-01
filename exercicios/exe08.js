/* exe 08
1. crie um algoritmo q receba 3num em variaveis e a deles crie uma condicional que retorne true caso 2 dessed numeros sejam
identicos.
2. crie um algoritmo q receba 3num em variaveis e a a partir, deles crie uma condicional que retorne true caso o primeiro num
seja o maior do 3.
3. crie um algoritmo q receba uma idade uma em variavel e a partir dela crie uma condicional que retorne true caso seja maior
de idade.
4. crie um algoritmo q receba 1num em uma variavel e a partir dele crie uma condicional q retorne true caso o num seja par. */

//question 1 

const num1 = 5
const num2 = 5
const num3 = 1
const cond1 = (num1 === num2) || (num1 === num3) || (num2 === num3)
console.log(`o valor logico será: ${cond1}`)

//question 2
const num4 =9
const num5 =7
const num6 = 8
const cond2 = (num4 > num5) && (num4 > num6)
console.log(`o valor logico será: ${cond2}`)

//question 3

const age = 19
const cond3 = ( age >= 18 )
console.log(`o usuario é maior de idade? ${cond3}`)

//question 4

const number1 = 10
const cond4 = ( number1 % 2 ) == 0
console.log(`o numero é par? ${cond4}`)