// personalizando terminal com chalk
// npm install chalk

// chalk na versão 5.0.1 não funciona, então instalei a versão 4.1.2 // npm install chalk@4.1.0
// https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module

const chalk = require('chalk')

const nota = 5

if (nota >= 7) {
    console.log(chalk.green('Parabéns, você foi aprovado!'))
} else {
    console.log(chalk.bgRed('Você precisa fazer a prova de recuperação.'))
}