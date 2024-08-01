//objetos

//obj vazio
const prof = {
    nome: "jean" ,
    idade: 29 ,
    endereço: "Rua xxxxx-xxxx" ,
    contato: "51 99999-9999" ,
    cadAtv: true,
    materias: ["algoritmos","front-end","back-end"],
    contarPiada: function(){
        console.log("é pa vê ou pa comer")
    }
}

//obj em obj

const donoPet = {
    nome: "beckman" ,
    pet: {
        nomePet: "apolo" ,
        raça: "Maine Coon" ,
        idade: 1,
        vacinas: {
            vacA: "xxx" ,
            vacB: "xxx" ,
            vacC: "xxx" ,
            vacD: "xxx" ,
        },
    },
}

console.log(donoPet.pet.vacinas.vacB)

//array d objetos

const profs = [
    {nome: "andreia", modulo: 1 },
    {nome: "vitor", modulo: 2},
    {nome: "Mina", modulo: 3},
]
profs[2].nome


//epalhamento ou spread

const newCurso = {
    ...elenco,
    nome: "diurno front-end"
}

console.log(newCurso)