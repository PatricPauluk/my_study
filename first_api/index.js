const express = require('express') // yarn add express

// Exemplos:
// query params = localhost:3000/curso?nome=Javascript
// route params = localhost:3000/cursos/1
// request body = { nome: 'NodeJS', tipo: 'Backend' }

const server = express();



// --------------- Exemplo de query params ---------------
server.get('/curso', (req, res) => { // rota de curso
    // return res.send('Hello world!'); // exibe no navegador
    const nome = req.query.nome;
    return res.json({ curso: `Aprendendo ${nome}` }); // retorna um json
})



// --------------- Exemplo de route params ---------------
const cursos = ['Node JS', 'Javascript', 'React Native'];
// Inserir no Insomnia:
server.get('/cursos/:index', (req, res) => { // rota de curso
    const { index } = req.params; // os colchetes tem relação com ECMAscript
    return res.json(cursos[index]);
})

server.listen(3000); // escuta o servidor na porta 3000