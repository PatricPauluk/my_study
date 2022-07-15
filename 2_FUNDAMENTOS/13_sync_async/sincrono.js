const fs = require('fs')

console.log('Inicio')

fs.writeFileSync('arquivo.txt', 'oi') // cria o arquivo depois que todo o código seja executado

console.log('Fim')