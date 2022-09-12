import { Link, useMatch, useResolvedPath } from "react-router-dom";
import webmuralss from "../images/webmuralss.jpg"; // gives image path
import notesjs from "../images/notesjs.jpg"; // gives image path

export default function Projects() {
  return (
    <main>
      <main className="container">
        <div className="cabecera">
          <h1 className="titulo">Projects </h1>
          <p className="descripcion">These are my small proyects</p>
        </div>
        <div className="nuevoflex">
          <div className="fixer">
            <section className="imagenesproyect ">
              <a
                href="https://my-app-seven-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="xd"
              >
                <img
                  className="imagenes"
                  src={webmuralss}
                  alt="this is car"
                ></img>
                <div class="overlay">WebMural</div>
                <div class="overlay2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </a>
            </section>
            <section className="imagenesproyect ">
              <Link to="../info">
                <img className="imagenes" src={notesjs} alt="this is car" />
                <div class="overlay">Notes </div>
                <div class="overlay2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.{" "}
                </div>
              </Link>
            </section>
          </div>
          <div className="fixer">
            <section className="imagenesproyect ">
              <Link to="../info">
                <img className="imagenes" src={webmuralss} alt="this is car" />
                <div class="overlay">Web Mural</div>
                <div class="overlay2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Link>
            </section>
            <section className="imagenesproyect ">
              <Link to="../info">
                <img className="imagenes" src={webmuralss} alt="this is car" />
                <div class="overlay">Web Mural</div>
                <div class="overlay2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Link>
            </section>
          </div>
          <div className="fixer">
            <section className="imagenesproyect ">
              <Link to="../info">
                <img className="imagenes" src={webmuralss} alt="this is car" />
                <div class="overlay">Web Mural</div>
                <div class="overlay2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Link>
            </section>
            <section className="imagenesproyect ">
              <Link to="../info">
                <img className="imagenes" src={webmuralss} alt="this is car" />
                <div class="overlay">Web Mural</div>
                <div class="overlay2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Link>
            </section>
          </div>
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
      </main>
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
