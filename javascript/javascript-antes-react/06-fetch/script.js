/* Fetch é uma forma de enviar requisições assíncronas para o servidor, ---NOTA ABAIXO
assim o código continua rodando consistente mesmo que o servidor esteja lento.
Serve para acessar/escrever dados em API's externas.
*/

// OBS: o método async/await é mais adequado para utilizar com o fetch

// --------------- Buscando dados com Fetch ---------------
// ao acessar a URL no navegador, pode visualizar o json cheio de dados para testes
fetch("https://ranekapi.origamid.dev/json/api/produto")
  // converte a requisição em json e retorna, e continua no outro then...
  .then(r => r.json())
  .then(jsonBody => {
  // ... exibe os dados recebidos da API no console, como json
  console.log(jsonBody);
  // exibindo dados selecionados da API no HTML
  document.querySelector("#app").innerHTML = jsonBody[0].nome;
});

/* O código acima foi melhorado, o antigo: ---NOTA ABAIXO

const req = fetch(
  "https://ranekapi.origamid.dev/json/api/produto"
).then(req => {
  return req.json();
}).then(jsonBody => {
  console.log(jsonBody);
  document.querySelector("#app").innerHTML = jsonBody[0].nome;
});

// console.log(req);
retorna um Promise {<pending>}, pois o fetch e o console.log executam imediatamente, ---NOTA ABAIXO
e não da tempo do fetch (requisição) sem completada, por isso o resultado pendente.
Funciona corretamente quando dentro da função (then) junta do fetch.
*/


// --------------- Inserindo dados com Fetch ---------------
// Site da API: https://ranek.origamid.dev/

// dados de usuário a serem enviados
const data = {
  id: "papauluk",
  nome: "Patric",
  email: "patric@email.com",
  senha: "123456",
  cep: "123456",
  rua: "Rua da Casa",
  numero: "455-A",
  bairro: "Meu bairro",
  cidade: "Minha cidade",
  estado: "Paraná"
};

// fetch para inserir dados
fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  // headers (cabeçalho) diz qual tipo de conteúdo é enviado ao servidor
  headers: { 
    "Content-Type" : "application/json"
  },
  // envio de dados, enviado em formato de string
  body: JSON.stringify(data),
});