const TemplateExpressions = () => {
  // Template Expressions é a forma de utilizar Javascript dentro de JSC, abrindo chaves {name}
  const name = "Patric";
  const data = {
    age: 27,
    job: "Programador",
  };

  return (
    <div>
      <p>
        Meu nome é {name}.
        Tenho {data.age} anos e sou {data.job}.
        Executando Javascript com Template Expressions, 4+4={4+4}.
        {console.log("Leitura de dados no Console Log por Template Expressions.")}
      </p>
    </div>
  );   
};

export default TemplateExpressions;