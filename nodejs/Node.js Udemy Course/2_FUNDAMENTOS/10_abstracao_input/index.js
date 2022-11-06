const inquirer = require('inquirer') // npm install --save inquirer@^8.0.0

// as perguntas ficam dentro do método prompt, dentro de um array, e cada uma em um objeto
inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    },
]).then((answers) => { // método then exibe as respostas
    //console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(`A media é ${media}.`)
}).catch(err => console.log(err)) // método catch exibe uma mensagem de erro, caso houver