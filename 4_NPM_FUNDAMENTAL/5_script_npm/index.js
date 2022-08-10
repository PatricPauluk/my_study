const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)
console.log(chalk.red.bold(diff))

/*
Os scripts de npm são inseridos dentro do package.json, na tag scripts.
É executado no terminal com o comando 'npm run <nome>'.
Se o nome do comando conter o 'start', ele não precisa do 'run'.
*/