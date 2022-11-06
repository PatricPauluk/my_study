const _ = require('lodash') // lodash sempre declarado como _ (npm install lodash)

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b) // salva a diferença dos arrays em diff (numeros que não contém no array b)
console.log(diff)

/*
Nota:
Intalando um npm rápido: npm init -y;
Comando: npm install, instala todos os pacotes quando o projeto não contém a pasta node_modules. (precisa do packaje.json)
*/