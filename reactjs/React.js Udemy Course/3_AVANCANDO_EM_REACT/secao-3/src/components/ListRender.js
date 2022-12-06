// Renderizando listas
import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Matheus", "Pedro", "Josias", "Patric"]);

  return (
    <div>
      <h2>ListRender</h2>
      <ul>
        {/* Em JSX o .map é seguido de parênteses, e não com chaves. Lista os nomes do array. */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender;