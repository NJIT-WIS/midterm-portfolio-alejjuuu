import React, { useState, useRef, useEffect } from "react";

const Experience: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([]); // Track each dropdown's open state
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the specific dropdown
      return newState;
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Check if click is outside both the dropdown and the button
    dropdownRefs.current.forEach((dropdownRef, index) => {
      if (
        dropdownRef &&
        buttonRefs.current[index] &&
        !dropdownRef.contains(event.target as Node) &&
        !buttonRefs.current[index].contains(event.target as Node)
      ) {
        setOpenDropdowns((prev) => {
          const newState = [...prev];
          newState[index] = false; // Close the specific dropdown
          return newState;
        });
      }
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="ds-experience-section">
      <div className="container">
        <h2 className="ds-heading">Work Experience</h2>
        <div className="row ds-experience-list">
          {[
            {
              year: "May 2023 - Present",
              company: "Bank of America",
              position: "Software Engineer",
            },
            {
              year: "May 2023 - Aug 2023",
              company: "Bank of America",
              position: "Software Engineer",
            },
            {
              year: "Jun 2022 - Aug 2022",
              company: "Fiserv",
              position: "AppOps Intern",
            },
            {
              year: "Feb 2022 - Jun 2022",
              company: "RideEV",
              position: "Frontend Developer",
            },
            {
              year: "Jun 2021 - Aug 2021",
              company: "Fiserv",
              position: "Technical Operations Intern",
            },
          ].map((item, index) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
              key={index}
            >
              <section>
                <span className="ds-year">{item.year}</span>
                <h3 className="ds-officename">{item.company}</h3>
                <span className="ds-department">{item.position}</span>
                <p>Click below to see my achievements at {item.company}.</p>
                <div
                  className="dropdown"
                  ref={(el) => (dropdownRefs.current[index] = el)}
                >
                  <button
                    className="dropdown-btn"
                    onClick={() => toggleDropdown(index)}
                    ref={(el) => (buttonRefs.current[index] = el)}
                  >
                    Achievements
                  </button>
                  <ul
                    className={`dropdown-content ${
                      openDropdowns[index] ? "open" : ""
                    }`}
                  >
                    <li>
                      Transformative Data Parsing for ML: Architected Python
                      virtual node parser fueling ML initiatives. Processed
                      diverse config files into a 100k+ row dataset, eliminating
                      duplicates. Resulting CSV and JSON outputs powered a
                      Python search engine.
                    </li>
                    <li>
                      Efficiency Amplifier: Engineered Python app to daily track
                      expiring node certificates, saving 50+ annual work hours.
                    </li>
                    <li>
                      File Analysis for Precision: Devised Python tool for
                      seamless comparison of file versions. Enabled error
                      detection, prevention, and change tracking, enhancing
                      accuracy and decision-making.
                    </li>
                    <li>
                      Data Science Trailblazing: Led data science project
                      predicting currency fluctuations. Leveraged pandas and
                      varied models, achieving a remarkable 8% error rate as a
                      team.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
