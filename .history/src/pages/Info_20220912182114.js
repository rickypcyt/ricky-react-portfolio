import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Info() {
  return (
    <main>
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
              <p>
                My name is Ricardo Perez, I'm a front-end developer based in
                Guayaquil, Ecuador. I have developed many front-end proyects.
              </p>
            </div>
          </section>
          <nav className="cabeceranavi">
            <ol>
              <div>
                <CustomLink to="/" className="oli">
                  Home
                </CustomLink>
              </div>
            </ol>
          </nav>
        </div>
      </div>
    </main>
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
