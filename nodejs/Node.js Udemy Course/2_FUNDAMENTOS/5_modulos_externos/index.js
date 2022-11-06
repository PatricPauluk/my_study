// inicializa npm no projeto com 'npm init'
// instalado 'npm install minimist'
// comparar com a pasta

const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
// console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log(`O nome dele é ${nome} e ele é ${profissao}.`)
// comando: node .\index.js --nome=Patric --profissao=Programador