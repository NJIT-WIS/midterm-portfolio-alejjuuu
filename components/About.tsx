import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="ds-about-section">
      <div className="container">
        <section>
          <h2 className="ds-heading">About Me</h2>
          <p>
            Hard worker, thirsty for learning, hustler, self-driven, looking for
            software engineering or AI roles.
          </p>
          <div className="ds-button-sec text-center">
            <a
              href="https://docs.google.com/document/d/1QPQSt-Kqm7OJtgIgJ-GQV-lzIVm0j6sVt2dPkNTtcvQ/edit?usp=sharing"
              className="ds-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
