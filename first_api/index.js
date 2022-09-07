const express = require('express') // yarn add express

// Exemplos:
// query params = ?nome=NodeJS
// route params = /curso/2
// request body = { nome: 'NodeJS', tipo: 'Backend' }

const server = express();


// --------------- Exemplo de query params ---------------
// localhost:3000/curso?nome=Javascript
server.get('/curso', (req, res) => { // rota de curso
    // return res.send('Hello world!'); // exibe no navegador

    const nome = req.query.nome;
    return res.json({ curso: `Aprendendo ${nome}` }); // retorna um json
})


// --------------- Exemplo de route params ---------------
// localhost:3000/cursos/1
server.get('/cursos/:id', (req, res) => { // rota de curso
    // return res.send('Hello world!'); // exibe no navegador

    const id = req.params.id;
    return res.json({ curso: `Curso ${id}` }); // retorna um json
})


server.listen(3000); // escuta o servidor na porta 3000