import { useState } from "react";
// Renderização condicional (se um conteúdo exibe ou não)

const ConditionalRender = () => {

  const [x, setX] = useState(true);

  return (
    <div>
      <h2>Renderização condicional</h2>
      <button onClick={() => setX(false)}>Parágrafo não exibe</button>
      <button onClick={() => setX(true)}>Parágrafo exibe</button>
      {x && <p>Estou sendo exibido</p>}
    </div>
  );
}

export default ConditionalRender;