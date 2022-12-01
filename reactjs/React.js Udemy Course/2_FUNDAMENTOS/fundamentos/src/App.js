// Components
import FirstComponent from './components/FirstComponent'; // a extensão .js é omitida (em React)

// Styles / CSS
import './App.css';

// Os componentes são importados em forma de tag <FirstComponent />
function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <FirstComponent />
    </div>
  );
}

export default App;
