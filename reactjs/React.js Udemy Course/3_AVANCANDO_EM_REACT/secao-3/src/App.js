import './App.css';

import Asset from "./assets/img2.jpg";
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

// As imagens do projeto podem ficar ou na pasta public, ou na pasta src/assets.

function App() {
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
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
