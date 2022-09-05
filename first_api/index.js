const express = require('express') // yarn add express

// verifica a importação
// console.log(express);

const server = express();

// localhost:3000/curso
server.get('/curso', (req, res) => { // rotas de cursos
    // console.log('Acessou a rota!');
    // return res.send('Hello world!'); // exibe no navegador
    return res.json({ curso: 'Node JS' }); // retorna um json
})

server.listen(3000); // escuta o servidor na porta 3000