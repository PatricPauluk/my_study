const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200 // indica que a requisição foi bem sucedida
    res.setHeader('Contenty-Type', 'text/html') // muda o tipo de conteúdo para text/html
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>') // ainda não aceita UTF-8
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})