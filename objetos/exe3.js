const pessoa = {
    eu: "thiago Santos",
    old: 17
}

function propriedades(pessoa) {
    const novaPessoa ={
        ...pessoa ,
        comidaFav: ["pizza", "lasanha", "hamburguer", "carbonara"] ,
        mlrAmg: {
            nome: "yuri beck" ,
            idade: 18
        }
    }
    console.log(`O nome da pessoa é ${novaPessoa.eu}, ele tem ${novaPessoa.old} suas comidas favoritas são ${novaPessoa.comidaFav}. Seu melhor amigo se chama ${novaPessoa.mlrAmg.nome}e tem ${novaPessoa.mlrAmg.idade}anos`)
    return novaPessoa
}
propriedades(pessoa)