import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {

  // dados para formulário e verificação se já foi enviado algum dado para alteração
  const [ name, setName ] = useState(user ? user.name : "");
  const [ email, setEmail ] = useState(user ? user.email : "");
  const [ bio, setBio ] = useState(user ? user.bio : "");
  const [ role, setRole ] = useState(user ? user.role : "");

  const handleName = (e) => {
    // A variável e (event) pega o valor do input para inserir em name
    setName(e.target.value);
  }

  // função de envio de formulário
  const handleSubmit = (e) => {
    // preventDefault evita recarregar a página ao enviar formulário (evento padrão do HTML) 
    e.preventDefault();

    // Aqui seriam enviados os dados do formulário
    console.log("Simulando envio de formulário... \n"
                +name+" "+email+" Função: "+role+"\n"
                +bio);

    // Após a validação e envio de dados do formulário, limpa os campos
    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>

      {/* onSubmit é responsável por chamar a função de envio do formulário */}
      <form onSubmit={handleSubmit}>

        {/* div nome */}
        <div>
          {/* htmlFor da label deve ser igual ao name do input (a label referencia o input) (não recomendado) */}
          <label htmlFor="name">Nome</label>
          <input 
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName} // onChange dispara a função caso qualquer alteração/escrita seja feita no input
            value={name} // value recebe um valor ao iniciar o formulário (caso tenha sido enviado)
          />
        </div>

        {/* div email */}
        <div>
          {/* label envolvendo o input (modo recomendado na documentação do React) */}
          <label> 
            <span>Email:</span>
            <input 
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)} // onChange disparado porém inline
              value={email} // value recebe um valor ao iniciar o formulário (caso tenha sido enviado)
            />
          </label>
        </div>

        {/* textarea */}
        <label>
          <span>Biografia</span>
          <textarea name="bio"
            placeholder="Descrição do usuário..."
            cols="30"
            rows="5"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* select */}
        <label>
          <span>Função no sistema:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        {/* Botão de envio */}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm;