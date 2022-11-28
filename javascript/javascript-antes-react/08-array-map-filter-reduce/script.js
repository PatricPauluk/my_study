const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 500",
  "Meus dados"
];

// Lembrando que algumas funções pequenas em arrow function NÃO PRECISAM especificar return

/* Exemplo de filter, para filtrar arrays ---NOTA ABAIXO

OBS: os valores do array só é armazenado na const quando
a função retorna true.

Código antigo:
const precosFiltro = precos.filter(function(preco) {
  console.log(preco);
  // insere apenas os valores (strings que contém R$)
  if (preco.includes("R$")) {
    return true;
  } else {
    return false;
  }
});
*/
const precosFiltro = precos.filter(preco => preco.includes("R$"));

/* Exemplo de map, para mapear e modificar arrays

Código antigo:
const precosNumeros = precosFiltro.map(function(preco) {
  // Retira o R$ das strings e os converte em numeros
  return Number(preco.replace("R$ ", ""));
});
*/
const precosNumeros = precosFiltro.map(preco => 
  Number(preco.replace("R$ ", ""))
);
  
/* Exemplo de reduce. Ele retorna sempre a última interação dele (um valor único). ---NOTA ABAIXO

Na função de callback, pode-se ter os valores da interação retornada ANTERIORMENTE e da ATUAL
conforme feitas as interações.

O primeiro valor retornado pode ser especificado após uma vírgula. no fim da função.

Caso não seja espefificado, ele percorre a variável com os 2 primeiros itens, pois já que é 
executada a primeira vez, ele não recebeu um valor de retorno.
Após a primeira interação, segue adiante com o valor anterior sendo retornado.

Código antigo de exemplo:
const total = precosNumeros.reduce(function(anterior, atual){
  console.log("Anterior: "+anterior+"\nAtual: "+atual);
  return anterior + atual;
}, 0);

No código atual, a variável anterior é chamade de acc, referente a ACUMULADOR,
pois é um valor acumulador. E o atual pode ser chamado de item, por ser o item atual.
*/
const total = precosNumeros.reduce((acc, item) => acc + item);

