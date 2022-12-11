import './App.css';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {

  const [ cars ] = useState([
    { id: 1, brand: "BMW", color: "Black", km: 21312 },
    { id: 2, brand: "Dodge", color: "Red", km: 5432 },
    { id: 3, brand: "VW", color: "White", km: 11223 },
    { id: 4, brand: "Hyundai", color: "Green", km: 9732 },
  ]);

  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      {cars.map(car => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;
