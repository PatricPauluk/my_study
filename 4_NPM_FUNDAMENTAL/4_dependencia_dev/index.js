const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)
console.log(chalk.red.bold(diff))

/*
Nota:
Intalando um npm como testes de desenvolvimento, exemplo:
npm install --save-dev chalk@4.1.0

No package.json fica em:
  },
  "devDependencies": {
    "chalk": "^4.1.0"
  }
*/