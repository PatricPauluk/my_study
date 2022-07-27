const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true) // recebe query da url
    const filename = q.pathname.substring(1) // substring(1) para não salvar a barra "/" do arquivo

    if (filename.includes('html')) { // se no arquivo incluir o nome html...
        if (fs.existsSync(filename)) { // ...verifica se o arquivo existe...
            fs.readFile(filename, function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else { // ...se não existir, erro 404 
            fs.readFile('404.html', function(err, data) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})