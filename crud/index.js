const express = require('express') // yarn add express
const server = express();
server.use(express.json()); // para enviar estruturas em json no express (funcionar o metodo post)

// CRUD apenas com JSON

const cursos = ['Node JS', 'Javascript', 'React Native'];

// lista todos os cursos do array
server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

// retorna um curso conforme passado por parâmetro
server.get('/cursos/:index', (req, res) => { 
    const { index } = req.params;
    return res.json(cursos[index]);
})

// insere um curso 
server.post('/cursos', (req, res) => {
    const { name } = req.body; // request body
    cursos.push(name)

    return res.json(cursos);
})

// atualizando um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

// excluindo um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ 
        message: "Curso deletado com sucesso!", 
        message2: "Lista atual: ",
        cursos 
    } );
    // return res.send();
})

server.listen(3000);