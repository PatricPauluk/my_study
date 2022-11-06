const express = require('express') // yarn add express
const server = express();
server.use(express.json()); // para enviar estruturas em json no express (funcionar o metodo post)

// CRUD apenas com JSON

const cursos = ['Node JS', 'Javascript', 'React Native'];

// Middleware é todo tipo de função entre o pedido da requisição e a resposta final do front end (req, res)

// Middleware Global (passa por este middleware independente da rota acessada)
server.use((req, res, next) => {
    console.log(`URL Chamada: ${req.url}`)
    return next(); // sem retornar o next não temos uma requisição
})

// Verifica se tem um nome informado na criação/atualização do curso
function checkCourse(req, res, next){
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso é obrigatório." });
    }
    
    return next();
}

// Verifica se o index do curso existe
function checkIndexCourse(req, res, next){
    const curso = cursos[req.params.index];

    if(!curso){
        return res.status(400).json({ error: "O curso não existe." })
    }

    return next();
}

// As funções acimas também são consideradas middlewares

// ------------------------------ ROTAS ------------------------------

// lista todos os cursos do array
server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

// retorna um curso conforme passado por parâmetro
server.get('/cursos/:index', checkIndexCourse, (req, res) => { 
    const { index } = req.params;
    return res.json(cursos[index]);
})

// insere um curso 
server.post('/cursos', checkCourse, (req, res) => {
    const { name } = req.body; // request body
    cursos.push(name)

    return res.json(cursos);
})

// atualizando um curso
server.put('/cursos/:index', checkCourse, checkIndexCourse, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

// excluindo um curso
server.delete('/cursos/:index', checkIndexCourse, (req, res) => {
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