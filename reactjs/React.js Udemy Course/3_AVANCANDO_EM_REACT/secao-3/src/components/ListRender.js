// Renderizando listas
import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Matheus", "Pedro", "Josias", "Patric"]);

  const [users, setUsers] = useState([
    { id: 0, name: "Patric", age: 27 },
    { id: 1, name: "Almir", age: 27 },
    { id: 2, name: "Bruna", age: 25 },
    { id: 3, name: "Matheus", age: 31 },
  ]);

  // Deleta um usuário aleatório da lista
  const deleteRandom = () => {
    // .random = número aleatório de 0 a 1 // .floor = "arredonda" o número
    const randomNumber = Math.floor(Math.random() * 4);
    // alert(randomNumber);

    // Previos state (prevUsers) é o primeiro argumento de set. Nos permite manipular os dados em seu estado original
    setUsers(prevUsers => {
      // "deleta" o usuario que o id for igual a randomNumber
      console.log(randomNumber)

      // retorna um valor FALSE para o usuário que for comparado e o id for igual, e o remove da lista
      return prevUsers.filter((user) => randomNumber !== user.id);
    })

  }

  return (
    <div>
      <h2>ListRender</h2>

      <ul>
        {/* Em JSX o .map é seguido de parênteses, e não com chaves. Lista os nomes do array. 
        quando o array é renderizado via .map, no console do browser acontece um erro que exige
        que cada item (child) da lista tenha uma propriedade key (id). Neste caso só para tirar
        o erro, é utilizado o index (i) do método map, porém não é indicado em projetos reais,
        pois o indice pode ser alterado conforme um item no array também é alterado. */}
        {list.map((item, i) => (
          <li key={i}>Nome: {item} / Indice: {i}</li>
        ))}
      </ul>

      <ul>
        {/* Desta forma indicada, o id (key) é indicado direto no array. */}
        {users.map((user) => (
          <li key={user.id}>ID: {user.id} / Nome: {user.name} / Idade: {user.age}</li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender;