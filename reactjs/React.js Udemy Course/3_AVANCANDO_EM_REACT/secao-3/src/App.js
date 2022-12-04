import './App.css';

import Asset from "./assets/img2.jpg";

// As imagens do projeto podem ficar ou na pasta public, ou na pasta src/assets.

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        {/* A pasta public é linkada com a pasta src, então podem ser chamadas diretamente na tag. */}
        <img id="imagem" src="/img1.jpg" alt="Imagem de public" />
      </div>
      {/* Imagem em Assets */}
      <div>
        {/* A pasta assets NÃO É é linkada com a pasta src, então é importada. */}
        <img id="imagem" src={Asset} alt="Imagem de assets" />
      </div>
    </div>
  );
}

export default App;
