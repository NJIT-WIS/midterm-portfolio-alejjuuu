import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="ds-about-section">
      <div className="container">
        <section>
          <h2 className="ds-heading">About Me</h2>
          <p>
            Smart gentleman, quick learner, hustler, self-driven, looking for
            software engineering or AI roles.
          </p>
          <div className="ds-button-sec text-center">
            <a
              href="https://docs.google.com/document/d/1Jn0UMBpQAvz-QE0aIgsNrWUl2xK4rl8CV8VluxdRlTs/edit?usp=sharing"
              className="ds-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
