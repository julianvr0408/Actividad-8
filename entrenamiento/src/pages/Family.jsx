import Title from "../elements/titulos";

const Family = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <Title text={"The Simpsons Family"} />
        <div className="col-md-12">
          <ul>
            <li>
              <p>
                Marjorie "Marge" Jacqueline Bouvier Simpson es uno de los personajes principales de la serie animada Los Simpson.
                Es la esposa de Homero Simpson y madre de 3 hijos.
              </p>
            </li>
            <li>
              <p>
                Homero J. Simpson (en Hispanoamérica Homero J. Simpson) es el personaje principal de la serie animada de televisión Los Simpson.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Family;
