// props são passadas de forma desestruturada.
// o nome deve ser IDENTICO e na ORDEM a prop informada na tag.

const CarDetails = ({ brand, km, color, used }) => {
  return (
    <div>
      <p>Marca: {brand} | KM: {km} | Cor: {color} | {used ? "Novo" : "Usado"} </p>
    </div>
  )
}

export default CarDetails;