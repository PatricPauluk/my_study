import { useState } from 'react';
import './App.css';

// As imagens do projeto podem ficar ou na pasta public, ou na pasta src/assets.
// import Asset from "./assets/img2.jpg";

import Fragment from './components/Fragment';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';


function App() {

  // Nas props podemos passar variáveis e hooks como useState (passadas em ShowUserName)
  const like = "música";
  const [profession] = useState("Programador");

  // Renderização de lista em componente
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", used: true, km: 0 },
    { id: 2, brand: "KIA", color: "Marrom", used: false, km: 213 },
    { id: 3, brand: "Renault", color: "Preto", used: false, km: 4313 },
  ];

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

      {/* Destructuring em props (forma mais indicada para trabalhar com props) */}
      <h2>CarDetails (destructuring)</h2>
      <p>Lista um por um</p>
      <CarDetails brand="BMW" km={100000} color="Azul" used={true}/>
      <CarDetails brand="HB20" km={200000} color="Branco" used={false}/>
      <CarDetails brand="Monza" km={300000} color="Cinza" used={true}/>

      {/* Loop em array de objetos */}
      <p>Lista em loop</p>
      {cars.map(car => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          used={car.used}
        />
      ))}

      {/* React fragments para quando é necessário ter mais de um elemento pai em um componente */}
      <Fragment />
    </div>
  );
}

export default App;
