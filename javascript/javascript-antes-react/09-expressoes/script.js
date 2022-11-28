// Exemplos de expressões, que são basicamente códigos reduzidos

// substitui if else
const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";

// filtrando números
const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter(numero => numero > 4);

// faz duas verificações, se as duas retornarem true retorna o último valor
const active = true;
const button = active && "Botão está ativo";

// função que calcula área de um quadrado
const areaQuadrado = l => l * l;