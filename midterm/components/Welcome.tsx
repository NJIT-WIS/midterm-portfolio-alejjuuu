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
                src="https://media.licdn.com/dms/image/D4D03AQE4NZMkaoMRIg/profile-displayphoto-shrink_800_800/0/1683148108953?e=1704326400&amp;v=beta&amp;t=K3TW4CAXqrNBIir02_ch6u_E82RIzQ_ra2gpc0Yr9NA"
                className="circle-image"
                alt="Profile"
                width={500}
                height={500}
              />
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
