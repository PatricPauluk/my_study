// CSS
import './App.css';

// Components
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários em React.js</h1>

      {/* Criação do primeiro formulário. 
          As variáveis enviadas em props são para simular um formulário de "edição". */}
      {/* <MyForm user={{ name: "Josias", email: "josias@gmail.com", bio: "Sou um administrador", role: "admin" }} /> */}
      <MyForm />
    </div>
  );
}

export default App;
