import './App.css';

import { useState, useEffect } from "react";

// url da API
const url = "http://localhost:3000/products";

function App() {
  const [ products, setProducts ] = useState([]);

  // resgatando dados do banco
  

  useEffect(() => {
    async function fetchData() {
      // fetch é uma alternativa nativa para conexão (como o Axios)
      const res = await fetch(url);
  
      // converte dados de json para objeto para ser utilizado
      const data = await res.json();
  
      setProducts(data);
    }

    fetchData()
  }, []);

  console.log(products)

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <button onClick={() => console.log(products)}>Ver</button>
    </div>
  );
}

export default App;
