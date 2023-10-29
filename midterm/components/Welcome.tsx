import React from "react";
import Image from "next/image";


const Welcome: React.FC = () => {
  return (
    <div className="ds-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <figure>
              <Image
                src="/../pages/assets/images/profile-image.jpg"
                className="circle-image"
                alt={""}
                width={500}
                height={500}
              ></Image>
            </figure>

          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <section>
              <h1>
                <span>Hello world</span>
                I am Alejandro <br /> the BEST software engineer and sales man.
              </h1>
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
                  <strong>15</strong>
                  <span>Projects</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
