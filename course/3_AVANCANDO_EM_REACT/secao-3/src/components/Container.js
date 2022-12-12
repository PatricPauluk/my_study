// Recebe o HTML ou JSX como children após desestroturar
const Container = ({ children, testValue }) => {
  return (
    <div>
      <h2>Container props</h2>
      <h3>Este é o título do container</h3>
      {children}
      <p>O valor de teste é {testValue}</p>
    </div>
  );
}

export default Container;