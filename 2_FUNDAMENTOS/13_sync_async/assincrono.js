const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oi', function(err) { // cria o arquivo durante a execução do código
    setTimeout(function () {
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')