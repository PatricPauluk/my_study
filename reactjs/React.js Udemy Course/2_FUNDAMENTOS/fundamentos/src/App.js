// Components
import FirstComponent from './components/FirstComponent'; // a extensão .js é omitida (em React)
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

// Styles / CSS
import './App.css';

// Os componentes são importados em forma de tag <FirstComponent />
function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
