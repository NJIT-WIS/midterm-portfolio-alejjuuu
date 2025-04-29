import React from "react";
import Image from "next/image";
import Link from "next/link";

const Welcome: React.FC = () => {
  return (
    <div className="ds-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 text-center">
            <figure>
              <Image
                src="/images/profile-image.webp"
                className="circle-image"
                alt="Profile"
                width={350}
                height={350}
              />
            </figure>
          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <section>
              <h1>
                <span>Hello world</span>
                Alejandro <br /> software engineering and AI.
              </h1>
              <br></br>
              <div className="ds-button-sec text-center">
                <Link
                  href="/projects"
                  className="ds-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Look at My Projects
                </Link>
              </div>
              <ul className="ds-numbervalulist">
                <li>
                  <h3>New Jersey Institute of Technology</h3>
                  <span>Bachelor in Information Technology</span>
                </li>
                <br />
                <li>
                  <strong>4+</strong>
                  <span>Experience</span>
                </li>
                <li>
                  <strong>17</strong>
                  <span>Projects</span>
                </li>
              </ul>
              <br></br>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
