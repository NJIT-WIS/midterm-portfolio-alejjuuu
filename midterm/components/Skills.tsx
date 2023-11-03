import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faJava,
  faNode,
  faVuejs,
  faReact,
  faCss3,
  faLinux,
  faHtml5,
  faGithub,
  faPython,
  faAws,
  faDocker,
  faFigma,
  faAndroid,
  faBootstrap,
  faGithubAlt,
  faGit,
  faRProject,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faTerminal,
  faPen,
  faLanguage,
  faChartBar,
  faCode,
  faServer,
  faCreditCard,
  faMobileAlt,
  faDesktop,
  faFileCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const Skills: React.FC = () => {
  return (
    <div className="ds-skills-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className="ds-heading">Core Skills</h2>
            <ul className="ds-skills-list">
              <li>
                <FontAwesomeIcon icon={faJs} />{" "}
                <a href="https://github.com/alejjuuu/Code-work/tree/ProdWork/JavasScript/Games">
                  JavaScript
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faJava} />
                <a href="https://github.com/alejjuuu/Code-work/tree/ProdWork/Java">
                  Java
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faNode} />
                <a href="https://github.com/NJIT-WIS/midterm-portfolio-alejjuuu/tree/main/midterm">
                  Node.js
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faVuejs} />
                <a href="https://github.com/alejjuuu/RideGreen">Vue.js</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} />
                <a href="https://github.com/alejjuuu/Docker">React</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} />
                <a href="https://github.com/alejjuuu/NJFREEEDU">CSS</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinux} />
                <a href="https://github.com/alejjuuu/linux-shell">LINUX</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} />
                <a href="https://github.com/alejjuuu/Code-work/tree/ProdWork/MySQL">
                  SQL
                </a>
              </li>
              <li>
                <a href="https://github.com/alejjuuu/Code-work/tree/ProdWork/R">
                  <FontAwesomeIcon icon={faRProject} />
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
                <a href="your-link-here">Stripe payments</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faBootstrap} />
                <a href="your-link-here">Bootstrap / Tailwind</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPython} />
                <a href="https://github.com/alejjuuu/Code-work/tree/ProdWork/Python">
                  Python
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faTerminal} />
                <a href="your-link-here">PowerShell</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faFileCode} />
                <a href="your-link-here">XML / JSON</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} />
                <a href="your-link-here">DBMS</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithubAlt} />
                <a href="https://github.com/NJIT-WIS/midterm-portfolio-alejjuuu">
                  GitHub/Git
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faHtml5} />
                <a href="https://github.com/alejjuuu/Code-work/blob/ProdWork/examples/payment.html">
                  HTML5
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />
                <a href="https://github.com/alejjuuu/Code-work/tree/ProdWork/PHP">
                  PHP
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faTerminal} />
                <a href="https://github.com/alejjuuu/Shell-scripts">
                  Shell Scripting
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAws} />{" "}
                <a href="https://github.com/alejjuuu/AWS">AWS</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} />
                <a href="your-link-here">Android Studio</a>{" "}
              </li>
              <li>
                <FontAwesomeIcon icon={faDocker} />{" "}
                <a href="https://github.com/alejjuuu/Docker">Docker</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faFigma} />
                <a href="https://www.figma.com/file/w9mJTduMTBNVXT22JUCEF4/Untitled?type=design&node-id=0%3A1&mode=design&t=YXgvBsxqHhBFiU2t-1">
                  Figma
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinux} />
                <a href="your-link-here">Linux CLI</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className="ds-heading">Other Skills</h2>
            <ul className="ds-skills-list">
              <li>
                <FontAwesomeIcon icon={faPen} />
                <a href="https://yeslea.com/">Copywriting</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} />
                <a href="your-link-here">Adobe Premiere Pro</a>
                {/* Add your URL here */}
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} />
                <a href="your-link-here">Davinci resolve</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} />
                <a href="your-link-here">Adobe Photoshop</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} />
                <a href="your-link-here">Adobe Illustrator</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} />
                <a href="your-link-here">Capcut</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLanguage} /> Spanish
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} />
                <a href="your-link-here">Final Cut Pro</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
