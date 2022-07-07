const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem favorita? ', (language) => {
    if (language === 'HTML' || language === 'CSS') {
        console.log(`Isso não é uma linguagem.`)
    } else {
        console.log(`A minha linguagem favorita é: ${language}`)
    }
    readline.close()
})