// Import Link from next/link for client-side transitions between routes.
import Link from 'next/link';

// Define the Home component.
export default function Home() {
  return (
    <div>
      <header className="ds-header" id="site-header">
        <div className="container">
          <div className="ds-header-inner">
            {/* Logo - using Link for client-side navigation to the homepage */}
            <Link href="/">
              <div className="ds-logo">
                <span>A</span>lejandro Velasquez
              </div>
            </Link>
            {/* Social links */}
            <ul className="ds-social">
              <li>
                <Link
                  href="https://github.com/alejjuuu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/alejandro-velasquez-b4a9971b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </li>
              {/* Projects Link - Link component for navigating to the projects page */}
              <li>
                <Link href="/projects" legacyBehavior>
                  <a>P</a>
                </Link>
              </li>
            </ul>
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
