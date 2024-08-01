// if/else

let cond1 = 2 === 1

if (cond1) {
    console.log("entrei no if 1!")
    //os numeros são iguais
}

//question
/* crie 2 variaveis (num1 e num2), e uma estrutura condicional q compare entre si,se os numeros fossem identicos, retorna
uma msg de sucesso */

const num1 = 22
const num2 = 20

let cond2 = num1 === num2
if (cond2) {
    console.log ("sucesso")
}

//question 2
/* crie 2 variaveis (num1 e num2), e uma estrutura condicional q compare entre si, e retorne se os numeros sao
identicos ou nao */

if (cond2) {
    console.log (" 22 e 20 são identicos")
} else {
    console.log("22 e 20 não são identicos")
}

//switch case
const paisOrigem = "brasil"

switch (paisOrigem) {
    case 'brasil':
        console.log(`voce é brasileiro`)
        break;
    case 'inglaterra':
        console.log(`voce é britanico`)
        break;
    case 'argentina':
        console.log(`voce é argentino`)
        break;
    case 'india':
        console.log(`voce é indiano`)
        break;
    default:
        console.log(`voce nao nasceu ksksksk`)
        break;
}
