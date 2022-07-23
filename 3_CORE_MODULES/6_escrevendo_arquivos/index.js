const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name // pega o nome do formulário

    if (!name) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else { // caso um nome tenha sido informado...
        fs.writeFile("arquivo.txt", name, function(err, data) { // ...escreve o nome em arquivo.txt (cria o arquivo caso não exista)...
            res.writeHead(302, {
                Location: '/', // ...retorna para a homepage
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})