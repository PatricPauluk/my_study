/* Com async e await criamos funções assíncronas(async), que podem esperar(await) as promisses ---NOTA ABAIXO
que são retornadas pelo fetch.

Como se pode observar, na aula da pasta 06-fetch existem muitos "then". Com async/await isso é evitado.
*/

// async torna funções e métodos assíncronos
async function fetchProdutos(url) {
  // com await se obtem uma resposta (só serve para promisses)
  const res = await fetch(url);
  const jsonBody = await res.json();

  // sem o await nos fetchs, retorna uma promisse pendente, pois executa todo o código na mesma hora
  console.log(jsonBody);
}

fetchProdutos("https://ranekapi.origamid.dev/json/api/produto");