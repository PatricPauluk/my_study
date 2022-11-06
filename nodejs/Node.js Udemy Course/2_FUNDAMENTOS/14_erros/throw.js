const x = '10'

// checa se x é um número
if (!Number.isInteger(x)) {
    throw new Error('O valor de x não é um número inteiro!') // exibe um erro no console
}

console.log('Continuando o código.')