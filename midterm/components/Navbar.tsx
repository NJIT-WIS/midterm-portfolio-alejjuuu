export default function Home() {
  return (
    <div>
      <header className="ds-header" id="site-header">
        <div className="container">
          <div className="ds-header-inner">
            {/* logo  <Link> */}
            <a href="/index" className="ds-logo">
              <span>A</span>lejandro Velasquez
            </a>
            {/* logo */}
            {/* social */}
            <ul className="ds-social">
              <li>
                <a
                  href="https://github.com/alejjuuu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alejandro-velasquez-b4a9971b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
            {/* social */}
          </div>
        </div>
      </header>

      {/* Wrapper with padding to push content below fixed navbar */}
      <main style={{ paddingTop: "120px" }}>
        {/* Your other components and content can go here */}
      </main>
    </div>
  );
}
