import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Contact() {
  return (
    <main>
      <div id="Page">
        <div className="cabecera">
          <h1 className="titulo">Contact </h1>
          <p className="descripcion">
            You can follow me in the following social media:
          </p>
        </div>
        <div className="separador">
          <section className="pageContact" style={{ display: "block", opacity: 1 }}>
            <div className="home">
              <ul>
                {" "}
                <li class="instagram">
                  <a
                    aria-label="instagram"
                    data-inlinesvg=".inlineSvgFile-3"
                    href="https://www.instagram.com/rickymunoz.z/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
                <li class="whatsapp">
                  <a href="https://wa.me/593939073708">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </a>
                </li>
                <li class="email">
                  <a
                    aria-label="email"
                    data-inlinesvg=".inlineSvgFile-2"
                    href="mailto:rickypcyt@gmail.com?subject= Hi I have seen your portfolio..."
                  >
                    <svg
                      className="svgemail"
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 643 465"
                    >
                      <path d="M39 3.4C31.6 5.1 27.5 7 21.4 11.6 11.2 19.3 5 29.2 3 41.1c-.8 4.5-1 61.4-.8 195.9.3 185.8.3 189.6 2.3 195 4.5 12.6 15.8 24.2 28.2 29.1 5 1.9 8.2 2.3 23.1 2.7l17.2.4V292.6c0-94.4.3-171.6.6-171.6.4 0 56.5 39.8 124.6 88.5l124 88.6 123.6-88.3c67.9-48.6 123.9-88.5 124.4-88.6.4-.2.8 76.8.8 171.2V464h15.3c16.2 0 21.9-1 30.3-5.1 11.3-5.6 21.7-19.2 24.3-31.7.8-3.8 1.1-59.8 1.1-194.5 0-166.8-.2-190-1.5-195.2-4.7-17.7-19.3-31.2-37.6-34.6-5.4-1-7-.9-9.2.2-1.4.8-62.9 44.7-136.6 97.6-73.7 53-134.5 96.3-135 96.3-.6 0-60.8-42.8-133.8-95.2C115.2 49.4 54 5.6 52.1 4.3c-3.8-2.6-5.2-2.7-13.1-.9z"></path>
                    </svg>
                  </a>
                </li>
                <li class="github">
                  <a
                    aria-label="github"
                    data-inlinesvg=".inlineSvgFile-5"
                    href="https://github.com/Rickypcyt/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120.78 117.79"
                      className="svggithub"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path
                            class="cls-1"
                            d="M60.39 0A60.39 60.39 0 0 0 41.3 117.69c3 .56 4.12-1.31 4.12-2.91 0-1.44-.05-6.19-.08-11.24C28.54 107.19 25 96.42 25 96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67 6.07.43 9.26 6.22 9.26 6.22 5.39 9.23 14.13 6.57 17.57 5 .55-3.9 2.11-6.56 3.84-8.07C36 85.55 21.85 80.37 21.85 57.23A23.35 23.35 0 0 1 28.08 41c-.63-1.52-2.7-7.66.58-16 0 0 5.07-1.62 16.61 6.19a57.36 57.36 0 0 1 30.25 0C87 23.42 92.11 25 92.11 25c3.28 8.32 1.22 14.46.59 16a23.34 23.34 0 0 1 6.21 16.21c0 23.2-14.12 28.3-27.57 29.8 2.16 1.87 4.09 5.55 4.09 11.18 0 8.08-.06 14.59-.06 16.57 0 1.61 1.08 3.49 4.14 2.9A60.39 60.39 0 0 0 60.39 0Z"
                          ></path>
                          <path
                            class="cls-2"
                            d="M22.87 86.7c-.13.3-.6.39-1 .19s-.69-.61-.55-.91.61-.39 1-.19.69.61.54.91ZM25.32 89.43c-.29.27-.85.14-1.24-.28a.92.92 0 0 1-.17-1.25c.3-.27.84-.14 1.24.28s.47 1 .17 1.25ZM27.7 92.91c-.37.26-1 0-1.35-.52s-.37-1.18 0-1.44 1 0 1.35.51.37 1.19 0 1.45ZM31 96.27a1.13 1.13 0 0 1-1.59-.27c-.53-.49-.68-1.18-.34-1.54s1-.27 1.56.23.68 1.18.33 1.54ZM35.46 98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7 1.51-.49 1.13.76 1 1.24ZM40.4 98.58c0 .5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91 1.29-.92 1.3.39 1.3.88ZM45 97.8c.09.49-.41 1-1.12 1.12s-1.35-.17-1.44-.66.42-1 1.12-1.12 1.35.17 1.44.66Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>{" "}
                </li>
                <li class="linkedin">
                  <a href="https://www.linkedin.com/in/ricardo-perez-b11872242/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </li>
              </ul>
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
    </ma>
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
