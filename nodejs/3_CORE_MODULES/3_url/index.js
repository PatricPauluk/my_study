const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address) // trabalhar com url

console.log(parsedUrl.host) // exibe host
console.log(parsedUrl.pathname) // exibe pathname 
console.log(parsedUrl.search) // exibe a busca no pathname
console.log(parsedUrl.searchParams) // exibe os parâmatros na busca
console.log(parsedUrl.searchParams.get('produtos')) // exibe o que esta sendo buscado