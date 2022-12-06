// Primeiro teste com React Hooks
import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  
  // Funciona errado. A variável altera o valor, porém não atualiza no Browser
  const wrongButton = () => {
    someData = 15;
    console.log(someData);
  }

  /* Funciona corretamente com o Hook useState, desestruturando duas variáveis como se fossem um array.
  
  Esta declaração funciona corretamente, mas fiz de outra forma pra me organizar:
  <button onClick={() => setNumber(25)}>Botão com useState</button>

  O number inicia com 15, mas pode ser alterado para qualquer valor em setNumber.
  */
  const [number, setNumber] = useState(15);

  const correctButton = () => {
    setNumber(25);
    console.log(number);
  }

  return (
    <div>
      <h2>ManageData</h2>
      <div>
        <p>someData = {someData}</p>
        <button onClick={wrongButton}>Botão sem useState</button>
      </div>

      <div>
        <p>number = {number}</p>
        <button onClick={correctButton}>Botão com useState</button>
      </div>
    </div>

  );
}

export default ManageData;