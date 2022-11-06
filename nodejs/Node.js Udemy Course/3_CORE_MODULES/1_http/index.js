const http = require("http")

const port = 3000 // porta

const server = http.createServer((req, res) => { // servidor, por parâmetro requisição e resposta

    res.write('Oi http') // escreve a mensagem pro usuário
    res.end() // finaliza a resposta

})

// escuta a porta
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})