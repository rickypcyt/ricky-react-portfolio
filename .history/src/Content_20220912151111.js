import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Content() {
    console.log(window.location)
  return (
    <main className="BodyOriginal">
      <div id="Page">
        <div className="cabecera">
          <h1 className="titulo">Hey I'm Ricky :)</h1>
          <p className="descripcion">Junior Developer</p>
        </div>
        <div className="separador">
          <section className="page" style={{ display: "block", opacity: 1 }}>
            <div className="home">
              <p className="parrafo ">
                <span>I'm a 19 year old </span>
                <span>junior programmer,</span>
                <span>I have been</span>
                <span> coding since I'm</span>
                <span>16. I like coding</span>
                <span>websites and right</span>
                <span>now I'm looking</span>
                <span>for a webdev job</span>
                <span>where I can share</span>
                <span>my knowledge and</span>
                <span>learn more in the</span>
                <span>journey.</span>
              </p>
            </div>
          </section>
          <nav className="cabeceranavi">
            <ol>
              <div>
                <CustomLink to="projects" className="oli">
                  Home
                </CustomLink>
              </div>
              <div className="oli">
                <CustomLink to="info">Info</CustomLink>
              </div>
              <div className="oli">
                <CustomLink to="contact">Contact</CustomLink>
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
