const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarCorredor() {
    rl.question('Qual seu corredor favorito? ', (corredor) => {
        if (corredor.toLowerCase() === 'leclerc' || corredor.toLowerCase() === 'charles leclerc') {
            console.log('Não é dos melhores mas ok, e Mônaco foi pura sorte!');
        }
        perguntarEquipe();
    });
}

function perguntarEquipe() {
    rl.question('Qual equipe você torce? ', (equipe) => {
        if (equipe.toLowerCase() === 'ferrari') {
            console.log('Não reconheço essa equipe, muito pequena');
            perguntarEquipe(); // Continua no loop até uma equipe diferente
        } else {
            console.log('Obrigado por compartilhar suas preferências!');
            rl.close();
        }
    });
}

perguntarCorredor();
