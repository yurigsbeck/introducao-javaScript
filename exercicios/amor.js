const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function profLauren() {
    rl.question('Você vai pegar a sua professora, a lauren? ', (professora) => {
        if (professora.toLowerCase() === 'sim' || professora.toLowerCase() === 'obvio' || professora.toLowerCase() === 'claro') {
            console.log('ESSE É MEU GAROTO, VAI FUNDO QUE É SUA, PEGAREMOS PROFESSORAS!');
        }
        profCacau();
    });
}

function profCacau() {
    rl.question('ela é melhor que a cacau? ', (cacau) => {
        if (cacau.toLowerCase() === 'não'|| cacau.toLowerCase() === 'nunca' || cacau.toLowerCase() === 'nem fodendo') {
            console.log('responda novamente porfavor');
            profCacau(); // Continua no loop até uma cacau diferente
        } else {
            console.log('AGORA SIMMMMMM! RAINHA DELES, LINDA MARAVILHOSA');
            rl.close();
        }
    });
}

profLauren();


















