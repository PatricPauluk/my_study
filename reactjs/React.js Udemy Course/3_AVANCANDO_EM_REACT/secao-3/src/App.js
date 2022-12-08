import { useState } from 'react';
import './App.css';

import Asset from "./assets/img2.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

// As imagens do projeto podem ficar ou na pasta public, ou na pasta src/assets.

function App() {

  // Nas props podemos passar variáveis e hooks como useState (passadas em ShowUserName)
  const like = "música";
  const [profession] = useState("Programador");

  return (
    <div className="App">
      {/* <h1>Imagens em React</h1> */}
      
      {/* Imagem em public */}
      <div>
        {/* A pasta public é linkada com a pasta src, então podem ser chamadas diretamente na tag. */}
        {/* <img id="imagem" src="/img1.jpg" alt="Imagem de public" /> */}
      </div>

      {/* Imagem em Assets */}
      <div>
        {/* A pasta assets NÃO É é linkada com a pasta src, então é importada. */}
        {/* <img id="imagem" src={Asset} alt="Imagem de assets" /> */}
      </div>

      <h1>Iniciando com Hooks</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* ShowUserName tem acesso a várias props (propriedades passadas na tag) */}
      <ShowUserName name="Patric" age={27} like={like} profession={profession}  />
    </div>
  );
}

export default App;
