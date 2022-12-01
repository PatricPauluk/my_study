/* Eventos em React

onClick: Evento que acontece algo ao clicar (executa uma função);
*/

const Events = () => {
  // Os eventos sempre acessam o argumento event (declarado como e)
  const handleMyEvent = (e) => {
    // "e" são os dados que o evento contém, para serem usados conforme a nossa necessidade
    // console.log(e);
    console.log("Clicou!");
  }

  // Função para renderizar JSX
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando se receber true!</h1>;
    } else {
      return <h1>Renderizando se receber false!</h1>
    }
  }

  return (
    <div>
      <div>
        {/*Se a função do evento for declarada com parenteses, ela é executada logo no inicio do programa.*/}
        <button onClick={handleMyEvent}>Clique aqui!</button>

        {/*A função pode ser declarada inline, porém não é recomendado como boa prática.*/}
        <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
        <button onClick={() => {
          if (true) {
            console.log("Isso não deveria existir.");
          }
        }}>Botão ruim.</button>
      </div>

      {/*Função que renderiza um JSX*/}
      {renderSomething(true)}
    </div>
  );
}

export default Events;