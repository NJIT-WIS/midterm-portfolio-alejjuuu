export default function Home() {
  return (
    <div>
      <header className="ds-header" id="site-header">
        <div className="container">
          <div className="ds-header-inner">
            {/* logo */}
            <Link href="/index">
              <a className="ds-logo">
                <span>A</span>lejandro Velasquez
              </a>
            </Link>
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

      {/* Your other components and content can go here */}
    </div>
  );
}
