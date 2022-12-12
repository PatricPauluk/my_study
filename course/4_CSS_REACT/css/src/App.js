// CSS
import './App.css';

// Components
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  // Const para teste do CSS Inline Dinâmico
  const n = 15;

  // Const para teste do CSS classe dinâmica
  const redTitle = true;

  return (
    <div className="App">
      {/* O CSS Global fica em index.css */}
      <h1>CSS Global</h1>

      {/* O CSS de componente é um arquivo .css com o mesmo nome do componente */}
      <MyComponent />

      {/* CSS inline (não recomendado), escrito com CamelCase ao invés de traços */}
      <p style={{ backgroundColor: "#fff", color: "green" }}>
        Parágrafo estilizado com inline-css
      </p>

      {/* CSS inline dinâmico (também não é recomendado) */}
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "aqua"})}>CSS Inline Dinâmico</h2>

      {/* Classes dinâmicas (classe no App.css) */}
      <h2 className={redTitle ? "red-title" : "blue-title"}>Classe dinâmica</h2>

      {/* CSS modules (recomendado), recurso de CSS scoped, ou seja, é exclusivo do componente */}
      <Title />
    </div>
  );
}

export default App;
