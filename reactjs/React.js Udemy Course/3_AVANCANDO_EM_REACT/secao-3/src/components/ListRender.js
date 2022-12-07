// Renderizando listas
import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Matheus", "Pedro", "Josias", "Patric"]);

  const [users] = useState([
    { id: 0, name: "Patric", age: 27 },
    { id: 1, name: "Almir", age: 27 },
    { id: 2, name: "Bruna", age: 25 },
    { id: 3, name: "Matheus", age: 31 },
  ]);

  return (
    <div>
      <h2>ListRender</h2>

      <ul>
        {/* Em JSX o .map é seguido de parênteses, e não com chaves. Lista os nomes do array. 
        quando o array é renderizado via .map, no console do browser acontece um erro que exige
        que cada item (child) da lista tenha uma propriedade key (id). Neste caso só para tirar
        o erro, é utilizado o index (i) do método map, porém não é indicado em projetos reais,
        pois o indice pode ser alterado conforme um item no array também é alterado. */}
        {list.map((item, i) => (
          <li key={i}>Nome: {item} Indice: {i}</li>
        ))}
      </ul>

      <ul>
        {/* Desta forma indicada, o id (key) é indicado direto no array. */}
        {users.map((item) => (
          <li key={item.id}>Nome: {item.name} / Idade: {item.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender;