const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimirMensagem(nome, sobrenome, idade) {
  console.log(`O cliente ${nome} ${sobrenome} tem ${idade} anos.`);
}

rl.question('Digite o nome: ', (nome) => {
  rl.question('Digite o sobrenome: ', (sobrenome) => {
    rl.question('Digite a idade: ', (idade) => {
      imprimirMensagem(nome, sobrenome, idade);
      rl.close();
    });
  });
});
