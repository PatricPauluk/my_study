const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'name',
        message: 'Qual o seu nome?',
    },
    {
        name: 'age',
        message: 'Qual a sua idade?',
    },
]).then((answers) => {
    if (!answers.name) {
        throw new Error(chalk.red('Por favor, informe o nome.'))
    } else if (!answers.age) {
        throw new Error(chalk.red('Por favor, informe a idade.'))
    }
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.name} e a sua idade é ${answers.age}.`))
}).catch(err => console.log(err))