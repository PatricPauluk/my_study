/* Há algumas formas de se declarar funções, mas a arrow function é
a mais recomendada. */

// função declarada modo padrão
function upperNameBase(name) {
  return name.toUpperCase();
}
// console.log(upperNameBase("patric"));

// função declarada em variável
const upperNameVar = function(name) {
  return name.toUpperCase();
}
// console.log(upperNameVar("patric"));



// --------------------- função declarada em arrow function (exemplos) ---------------------


// OBS: se tiver apenas 1 argumento não precisa de parenteses
// const upperNameArrow = name => {
//   return name.toUpperCase();
// }
// console.log(upperNameArrow("patric"));

// se for retornar apenas uma linha, não precisa abrir chaves e nem return
// const upperNameArrow = name => name.toUpperCase();
// console.log(upperNameArrow("patric"));


// classe contrutora
class Menu {
  // metodo construtor é usado logo ao chamar a classe pra construir uma, recebendo um parâmetro
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active"
  }

  // evento que adiciona a a classe .active no objeto contruído
  addActiveEvent() {
    /* evento de clique (css do clique definido no html) ---NOTA ABAIXO
    Um this dentro de outro this, referencia ao this inicial em uma função de callback,
    ou seja, o código abaixo:
    this.menuElement.addEventListener("click", function(event)
    
    ... não consegue acessar this.activeClass.

    Porém, ao ser transformado em arrow function (como abaixo), ele acessa normalmente.
    */
    this.menuElement.addEventListener("click", event => {
      // event.target se referencia a menuElement
      event.target.classList.add(this.activeClass);
    })
  }
}

// constrói o objeto menu com um argumento de classe .principal
const menu = new Menu(".principal");

// deixa o evento de clique ativo
menu.addActiveEvent();

// exibe no console do browser
console.log(menu);