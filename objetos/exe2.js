/*crie um objeto q represente um filme. ele deve ter dados da direção , o nome, o ano d lançamento, uma lista como
elenco e uma propriedade q diga se vc já viu ou não*/

const filme = {
    nome: "Como treina o seu dragão" ,
    direção: "Dean DeBlois" ,
    anoLançamento: 2010 ,
    elenco: ["Gustavo Pereira", "Luisa Palomanes", "Mauro Ramos"] ,
    assitiu: true,
    personagens: ["soluço", "astrid", "stoico"]
}
console.log(filme.nome)
console.log(filme.direção)
console.log(filme.anoLançamento)
console.log(filme.elenco[2])
console.log(filme.assitiu)

/* crie um objeto q representa uma pessoa. essa pessoa precisa ter nome, idade, genero, musical preferido

const pessoa = {
    nome: "Rafaela Teixeira" ,
    idade: 19 ,
    gêneroMusical: "pagode" ,
}
console.log(`o nome dela é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta de ${pessoa.gêneroMusical}`) */

/*3. adicione ao obj uma lista com os nomes dos personagens do filme. acesse e imprima cada pessoa do elencoi junto
com seu respectivo personagem. altere a primeira pessoa do elenco por "xuxa". imprima no console*/
filme.elenco[0] = "xuxa"

console.log(filme.personagens[0], " - ", filme.elenco[0])
console.log(filme.personagens[1], " - ", filme.elenco[1])
console.log(filme.personagens[2], " - ", filme.elenco[2])
