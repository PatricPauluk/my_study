const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', function(err, data) { // lê o arquivo mensagem.html
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
    
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

/* obs: writeHead melhor que usar statusCode e setHeader no parâmetro res
(como na aula 4_http_com_url), pois fica tudo em uma linha só */