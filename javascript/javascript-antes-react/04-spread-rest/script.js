/* exemplo de rest ---NOTA ABAIXO

Os 3 pontos em clients indicam que a variável clients será um array,
pois recebe o "resto" dos argumentos passados por parâmetro.
*/
function showList(company, ...clients){
  console.log(company);
  console.log(clients);
}
// showList("Origamid", "Patric", 27, "João", 23)



// ------------------------------------------------------------------------



/* exemplos de spread ---NOTA ABAIXO

É necessários utilizar 3 pontos antes da variável números,
para a função que captura o maior numero do array funcionar.
Ela entende como se os valores tivessem sido inseridos um
por um, e não como um array em si. 

Também funciona em valores capturados do HTML, objetos, etc...
*/

// exemplo 1: com array de números
const numeros = [12, 43, 76, 32, 65, 98, 12, 45, 37]
// console.log(Math.max(...numeros));



/* exemplo 2: capturando html ---NOTA ABAIXO

Retorma uma nodelist (semelhante a array) 

Uma das formas de listar uma nodelist é com forEach:
items.forEach(item => {
  console.log(item);
});
Retorna objetos.

Caso fosse listar com map:
items.map(item => {
  console.log(item);
});
Vai retornar um erro, pois map retorna apenas arrays.


Uma solução pra isso é converter a nodelist em array.

Uma forma, seria convertendo logo no inicio como:
const items = Array.from(document.querySelectorAll("li"));

Outra é colocar items dentro de um array e espalhar (spread)
com os 3 pontos [...items] como abaixo. Desta forma, a variável
items continua uma nodelist.
*/
const items = document.querySelectorAll("li");

[...items].map(item => {
  // console.log(item);
});
// console.log(items);



// exemplo 3: clonando um objeto
const carro1 = { cor: "Azul", portas: 4, ano: 2022 }

/* carro2 NÃO É um clone de carro, apenas refencia a carro ---NOTA ABAIXO

Para confirmar, basta testar com:
console.log(carro1 === carro2); // retorna true
Retorna true pois são referências.

console.log(carro1 === carro3); // retorna false
Retorna false pois não são referências, e sim clones.
*/
const carro2 = carro1;

// carro3 é um clone de carro, e podem ser inseridos outros atributos, como turbo
const carro3 = { ...carro1, turbo: true };



// exemplo 4: mostrando que a clonagem não é perfeita
class Transporte {
  constructor() {
    this.terrestre = true;
  }
  andar() {
    console.log("O carro andou.")
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

// a criação do carro normal
const carro = new Carro("Vermelho", 4);
// console.log(carro.andar());

/* a criação do carro como clonagem imperfeita ---NOTA ABAIXO

A criação herda os atributos, mas não herda métodos (no caso o andar()).
A variável carro é do tipo "Carro", e a carroClone é do tipo "objeto".
O protótipo de carro é do tipo "Transporte", e o de carroClone é do tipo "objeto".
*/
const carroClone = { ...carro };
// console.log(carroClone.andar());

