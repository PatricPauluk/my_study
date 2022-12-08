// props são passadas de forma desestruturada.
// o nome deve ser IDENTICO e na ORDEM a prop informada na tag.

const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>CarDetails</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  )
}

export default CarDetails;