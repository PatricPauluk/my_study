// Basicamente, recebe uma função em App.js, e os botões alteram a mensagem em outro componente

const ChangeMessageState = ({ handleMessage }) => {
  const msg = ["Mensagem 1", "Mensagem 2", "Mensagem 3"];

  return (
    <div>
      <button onClick={() => handleMessage(msg[0])}>{msg[0]}</button>
      <button onClick={() => handleMessage(msg[1])}>{msg[1]}</button>
      <button onClick={() => handleMessage(msg[2])}>{msg[2]}</button>
    </div>
  )
}

export default ChangeMessageState;