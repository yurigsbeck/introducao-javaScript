 //exe01

 function soma(num1,num2) {
    let soma = num1 + num2
    return soma
 }
const resultado = soma(5,5)

console.log(resultado + 2)

//exe02

function lista(array = [1, 2, 3, 4, 5]) {
   return array[array.length -1]
}
console.log(`o ultimo elemento do array é: ${lista()}`)

//exe03

function nome(nome){
   console.log(` Olá ${nome} Bom Dia!`)
}
nome("Yuri")

//exe04

function frase (nome, sobrenome, idade, ){
   console.log(`o cliente ${nome} ${sobrenome} tem ${idade} anos`)
}
frase('yuri', 'beck','18')
frase('Ana', 'Beatriz','15')
frase('Enzo', 'Moreira','15')