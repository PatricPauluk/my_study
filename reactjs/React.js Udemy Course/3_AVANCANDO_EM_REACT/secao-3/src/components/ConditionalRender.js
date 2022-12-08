import { useState } from "react";
// Renderização condicional (se um conteúdo exibe ou não)

const ConditionalRender = () => {

  const [x, setX] = useState(true);
  const [name, setName] = useState();

  return (
    <div>

      {/* Simples situações que um conteúdo é exibido ou oculto */}

      <h2>Renderização condicional</h2>
      <button onClick={() => setX(false)}>Parágrafo não exibe</button>
      <button onClick={() => setX(true)}>Parágrafo exibe</button>
      {x && <p>Estou sendo exibido</p>}
      
      
      <button onClick={() => setName("Patric")}>Confirma o nome Patric</button>
      {name === "Patric" ? (
        <p>O nome é Patric</p>
      ) : (
        <p>Nome não encontrado</p>
      )}
    </div>
  );
}

export default ConditionalRender;