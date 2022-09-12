import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Info() {
  return (
    <body>
      <div id="Page">
        <div className="cabecera">
          <h1 className="titulo">Info </h1>
          <p className="descripcion">
            Here is the info about my whole Coding Journey:
          </p>
        </div>
        <div className="separador">
          <section className="page" style={{ display: "block", opacity: 1 }}>
            <div className="homeinfo">
              <p >
                My name is Ian Dunkerley, I'm a front-end developer based in
                Torquay, Devon, UK. I have developed many types of front-ends
                from well know DJ applications to Ecommerce booking
                platforms.Informático y empresario estadounidense. Padre del
                primer ordenador personal y fundador de Apple Computer,
                probablemente la empresa más innovadora del sector, este mago de
                la informática fue uno de los más influyentes de la vertiginosa
                escalada tecnológica en que aún vive el mundo actual,
                contribuyendo decisivamente a la popularización de la
                informática. Sus ideas visionarias en el campo de los
                ordenadores personales, la música digital o la telefonía móvil
                revolucionaron los mercados y los hábitos de millones de
                personas durante más de tres décadas.
              </p>
            </div>
          </section>
          <nav className="cabeceranavi">
            <ol>
              <CustomLink to="/" className="oli">
                Home
              </CustomLink>
            </ol>
          </nav>
        </div>
      </div>
    </body>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
