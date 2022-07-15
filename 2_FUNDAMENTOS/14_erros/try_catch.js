const x = 10

try { // tenta fazer uma alteração em x
    x = 2
} catch(err) { // se não for possível, exibe o erro
    console.log(`Erro: ${err}`)
}

console.log(`Valot de x: ${x}`)