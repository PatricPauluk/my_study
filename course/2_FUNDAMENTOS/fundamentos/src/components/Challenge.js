const Challenge = () => {
  const a = 20;
  const b = 30;

  // const sum = (a, b) => {
  //   return a + b;
  // }

  return (
    <div>
      <p>Soma dos números {a}+{b}</p>
      <button onClick={() => console.log(a+b)}>Clique aqui para somar (resultado no console)</button>
    </div>
  );
}

export default Challenge;