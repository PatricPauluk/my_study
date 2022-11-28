/* Classe é uma forma de organizar o seu código em pequenos objetos, ---NOTA ABAIXO
que se resumem em métodos(funções) e propriedades(valores).

Classes normalmente são nomeadas com a primeira letra em maiúsculo.
*/

class SmoothScroll {
  /* O método construtor contém as principais propriedades da classe ---NOTA ABAIXO
  e é executado logo no inicio (após ela ser executada).

  Parâmetros da criação do objeto são passados pelo construtor:
  constructor(parametro)

  Para adicionar propriedades ao objeto é necessário usar o this, para referenciar o mesmo (SmoothScroll):
  this.nome = "Patric";
  */
  constructor(link) {

    // seleciona os links (a) do html
    this.linkElement = document.querySelectorAll(link);
  }

  // Método de evento para addClickEvent()
  handleClick(event) {
    // preventDefault previne o padrão. Os cliques não "teleportam" mais para a section
    event.preventDefault();

    // captura o valor do href da tag <a> clicada
    const href = event.currentTarget.getAttribute("href");

    // seleciona a section conforme o href selecionado acima
    const section = document.querySelector(href);

    /* Função de scroll até o valor indicado por pixels. ---NOTA ABAIXO
    No caso, o valor indicado seris o offsetTop da section selecionada.

    offsetTop contém o valor da distância em pixels da section até o topo da página.

    behavior: "smooth" serve para o scroll ser suave. (não funciona no Safari)
    */
    window.scrollTo({
      // calculo: valor da section até o topo - (tamanho total da janela - tamanho da altura da section) / 2 // centraliza conteúdo do scroll
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth"
    });
  }

  /* Método de clique ---NOTA ABAIXO

  Métodos também podem ser chamados pelo objeto criado:
  scroll.addClickEvent();

  Neste caso, foi chamado dentro do construtor.
  */
  addClickEvent(){
    this.linkElement.forEach(link => {
      // adicionado um evento que ocorre quando o link é clicado
      link.addEventListener("click", this.handleClick);

      // link.addEventListener("click", () => console.log("clicou"));
    });
  }
}

// Classe para pintar/selecionar o link clicado, tem as propriedades de SmoothScroll
class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, sections) {
    /* Quando se extende de outra classe, é necessário inserir o super() ---NOTA ABAIXO
    O super é como se executasse o constructor da class que foi extendida.

    O mesmo vale para os parâmetros.
    */
    super(links);

    // Seleciona todas as sections do HTML
    this.sectionElements = document.querySelectorAll(sections);

    /* Código necessário para this de addEventListener referenciar o ActiveSmoothScroll corretamente. ---NOTA ABAIXO

    O this dentro de activeNavScroll() se referencia a window. Então, com este código
    ele "força" a referênciar ao ActiveSmoothScroll, que é o que precisamos.
    */
    this.handleScroll = this.handleScroll.bind(this);

    this.activeNavScroll();
    this.handleScroll();
  }

  // Método que funciona com activeNavScroll()
  handleScroll() {
    // para cada sessão...
    this.sectionElements.forEach((section, index) => {
      // verifica se a página é maior que a sessão atual na janela (calculo para ativar quando a section estiver no centro da tela)
      if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        // se for, adiciona a classe "active" no link da section atual e pinta a "bolinha" do link
        this.linkElement[index].classList.add("active");
      } else {
        // se a página já passou a sessão atual, remove a classe "active"
        this.linkElement[index].classList.remove("active");
      }
    });
    console.log(window.pageYOffset);
  }

  // Método com evento que ocorre ao "scrollar" a tela
  activeNavScroll(){
    window.addEventListener("scroll", this.handleScroll);
  }
}


// cria um objeto scroll (no parâmetro é passado primeiro os links a que comecem com # do HTML como seletor css)
const scroll = new ActiveSmoothScroll("a[href^='#", "section");

// console.log(scroll.linkElement);

scroll.addClickEvent();