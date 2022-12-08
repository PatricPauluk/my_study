// Trabalhando com props

// Props é chamada no inicio
const ShowUserName = (props) => {
  return (
    <div>
      {/* Exibe o nome de um usuário via props */}
      <h2>ShowUserName</h2>
      <p>
        Meu nome é {props.name} e tenho {props.age} anos. 
        Gosto de {props.like} e quero me tornar um {props.profession}.
      </p>

    </div>
  );
}

export default ShowUserName;