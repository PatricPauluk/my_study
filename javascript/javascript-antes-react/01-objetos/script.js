/* A partir do momento que é criado uma variável e definido "chaves" a ela,
é um objeto. Objetos tem propriedades (variáveis) e métodos (funções). */

// objeto
const menu = {
  // propriedade
  class: ".principal",
  // método
  ativar() {
    // this se refere ao próprio objeto (menu)
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  },
}

// chama a propriedade do objeto
// console.log(menu.class);

// chama objeto inteiro
// console.log(menu);

// chama o método do objeto (exibe pelo console do browser)
// menu.ativar();