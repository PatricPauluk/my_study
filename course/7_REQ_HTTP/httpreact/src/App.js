import './App.css';

import { useState, useEffect } from "react";

// url da API
const url = "http://localhost:3000/products";

function App() {

  const [ products, setProducts ] = useState([]);

  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");

  // resgatando dados do bancp
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

  // inserindo dados no banco
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, // recebe o name do submit (como é o mesmo nome não precisa colocar name: name)
      price // o mesmo vale para price
    }

    // realiza a conexão para inserir dados
    const res = await fetch(url, {
      method: "POST", // método
      headers: { // cabeçalho
        "Content-Type": "application/json" // define que o tipo de conteúdo enviado esta em JSON
      },
      body: JSON.stringify(product), // converte os dados JSON para String no body para ser trafegado no backend
    })

    // adiciona o produto e carrega os dados de forma dinâmica
    const addedProduct = await res.json();
    setProducts(prevP => [...prevP, addedProduct]);

  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} R${p.price}</li>
        ))}
      </ul>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preco:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
