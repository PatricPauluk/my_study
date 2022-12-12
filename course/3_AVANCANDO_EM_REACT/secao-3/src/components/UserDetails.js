const UserDetails = ({ name, age, profession }) => {
  return (
    <div>
      <p>
        Nome: {name} | 
        Idade: {age} | 
        Profession: {profession} | 
        { age >= 18 ? " Pode tirar habilitação" : " Não pode tirar habilitação" }
      </p>
    </div>
  )
}

export default UserDetails;