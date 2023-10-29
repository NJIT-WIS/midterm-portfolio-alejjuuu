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
                <FontAwesomeIcon icon={faJs} /> JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faJava} /> JAVA
              </li>
              <li>
                <FontAwesomeIcon icon={faNode} /> Node.js
              </li>
              <li>
                <FontAwesomeIcon icon={faVuejs} /> Vue.js
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} /> React
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} /> CSS
              </li>
              <li>
                <FontAwesomeIcon icon={faLinux} /> LINUX
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} /> SQL
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} /> AJAX
              </li>
              <li>
                <FontAwesomeIcon icon={faCreditCard} /> Stripe payments
              </li>
              <li>
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
              </li>
              <li>
                <FontAwesomeIcon icon={faPython} /> Python
              </li>
              <li>
                <FontAwesomeIcon icon={faTerminal} /> PowerShell
              </li>
              <li>
                <FontAwesomeIcon icon={faFileCode} /> XML
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} /> DBMS
              </li>
              <li>
                <FontAwesomeIcon icon={faGithubAlt} /> Github
              </li>
              <li>
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} /> PHP
              </li>
              <li>
                <FontAwesomeIcon icon={faTerminal} /> Shell Scripting
              </li>
              <li>
                <FontAwesomeIcon icon={faAws} /> AWS
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} /> Android Studio
              </li>
              <li>
                <FontAwesomeIcon icon={faDocker} /> Docker
              </li>
              <li>
                <FontAwesomeIcon icon={faFigma} /> Figma
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} /> GitHub/Git
              </li>
              <li>
                <FontAwesomeIcon icon={faLinux} /> Linux CLI
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className="ds-heading">Other Skills</h2>
            <ul className="ds-skills-list">
              <li>
                <FontAwesomeIcon icon={faPen} /> Copywriting
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} /> Adobe Premiere Pro
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} /> Davinci resolve
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} /> Adobe Photoshop
              </li>
              <li>
                <FontAwesomeIcon icon={faPalette} /> Adobe Illustrator
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} /> Capcut
              </li>
              <li>
                <FontAwesomeIcon icon={faLanguage} /> Spanish
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} /> Final Cut Pro
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
