export default function Home() {
  return (
    <div>
      <header className="ds-header" id="site-header">
        <div className="container">
          <div className="ds-header-inner">
            {/* logo */}
            <a href="index" className="ds-logo">
              <span>A</span>lejandro Velasquez
            </a>
            {/* social */}
            <li>
              <a href="#" target="_blank">
                <i className="ri-stack-overflow-line"></i>
              </a>
            </li>

            <ul className="ds-social">
              <li>
                <a href="https://github.com/alejjuuu" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alejandro-velasquez-b4a9971b4/"
                  target="_blank"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Your other components and content */}
    </div>
  );
}
