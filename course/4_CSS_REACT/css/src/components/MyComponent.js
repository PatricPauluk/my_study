import './MyComponent.css';

const MyComponent = () => {
  return (
    <div>
      <h2>CSS do Componente</h2>
      <p>Parágrafo do componente ainda com CSS Global</p>
      <p className="p-my-comp">Parágrafo do componente sem CSS Global</p>
    </div>
  );
}

export default MyComponent;