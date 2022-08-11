const _ = require('lodash') // npm install -g lodash instalado globalmente
// mas este pacote necessita de npm link lodash para funcionar
// npm link copia os arquivos do diretório do PC

const arr = [1, 2, 2, 3, 3, 4, 4, 5]

console.log(_.sortedUniq(arr))