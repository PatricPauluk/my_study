/* Deve ser compreendido completamente, pois aqui se tem a habilidade de dividir o código em pedaços. ---NOTA ABAIXO
Usado em TODOS os frameworks.

Deve ser declarado no html da seguinte forma:
<script type="module" src='script.js'></script>

Tive que rodar com node pra funcionar adequadamente, não funciona mais no live server. Comando:
npm init

Dentro do package.json:
"type": "module"

Basicamente é exportação e importação. Bem autoexplicativo.
*/

// importando uma ou várias funções
import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";

// importando uma função (por causa do export pode se inserir qualquer nome)
import numero from "./numeroAleatorio.js";

// importando um objeto
import Circulo from "./circulo.js";

// console.log(areaQuadrado(2));
// console.log(perimetroQuadrado(2));

// console.log(numero());

// console.log(Circulo.circunferencia(2));
// console.log(Circulo.area(1));
// console.log(Circulo.aleatorio());