/* função que recebe o evento ---NOTA ABAIXO

O código pode ser desestruturado direto no parâmetro da função:

function handleMouseMove({ clientX, clientY }) {
  console.log("X:"+clientX+" Y:"+clientY);
}

Funciona exatamente igual.
*/
function handleMouseMove(event) {
  /* exatamente O MESMO código abaixo, porém desestruturado ---NOTA ABAIXO
  const clientX = event.clientX;
  const clientY = event.clientY;

  o nome deve ser EXATAMENTE IGUAL o da propriedade
  */
  const { clientX, clientY } = event;

  // exibe as posições X e Y do mouse
  console.log("X:"+clientX+" Y:"+clientY);

  // pode ver todo o evento do mouse e suas propriedades
  // console.log(event);
}

// executa um evento que acontece SEMPRE que o mouse passa pela tela do HTML
// document.documentElement.addEventListener("mousemove", handleMouseMove);


// processo de desestruturação em array
const frutas = ["Banana", "Uva", "Pêra"]
const [fruta1, fruta2, fruta3] = frutas;

// console.log(fruta1, fruta2);