import React, { useState, useRef, useEffect } from "react";

const Projects: React.FC = () => {
  // Track each dropdown's open state
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([false, false]);
  // Refs for each dropdown and button
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Toggle the specific dropdown
  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the clicked dropdown
      return newState;
    });
  };

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (event: MouseEvent) => {
    dropdownRefs.current.forEach((dropdownRef, index) => {
      // Ensure dropdownRef and buttonRefs.current[index] are not null before accessing .contains()
      if (
        dropdownRef &&
        buttonRefs.current[index] && // Check if buttonRefs.current[index] is not null
        !dropdownRef.contains(event.target as Node) && // Check outside the dropdown
        !buttonRefs.current[index]?.contains(event.target as Node) // Check outside the button, safely handle null with optional chaining
      ) {
        setOpenDropdowns((prev) => {
          const newState = [...prev];
          newState[index] = false; // Close the specific dropdown
          return newState;
        });
      }
    });
  };

  // Add the event listener for clicks outside
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
        <h2 className="ds-heading">Projects</h2>
        <div className="row ds-experience-list">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              {/* Project Duration */}
              <span className="ds-year">Nov 2025 - Dec 2025</span>

              {/* Project Title */}
              <h3 className="ds-officename">NLP for Tax Preparation</h3>

              {/* Project Role */}
              <span className="ds-department">Python Script Developer</span>

              {/* Project Description */}
              <p>
                The project focused on developing an NLP-based solution to
                automate tax preparation using a Python script. The system
                processes tax-related documents, extracting relevant information
                for tax filing purposes, and outputs formatted data ready for
                use in tax preparation software.
              </p>
              <p>
                <a href="https://tecnj.herokuapp.com/roi.php">
                  https://tecnj.herokuapp.com/roi.php
                </a>
              </p>
              {/* Responsibilities and Achievements */}
              <div
                className="dropdown"
                ref={(el) => (dropdownRefs.current[2] = el)}
              >
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(2)} // Pass index 1 for the second dropdown
                  ref={(el) => (buttonRefs.current[2] = el)}
                >
                  Achievements
                </button>
                <ul
                  className={`dropdown-content ${
                    openDropdowns[2] ? "open" : ""
                  }`} // Toggle the open class
                >
                  {/* List of Achievements */}
                  <li>
                    <strong>Developed the core NLP engine:</strong> Created a
                    Python-based script using NLP libraries (e.g., SpaCy, NLTK)
                    to process and analyze tax documents.
                  </li>
                  <li>
                    <strong>Automated Data Extraction:</strong> Built a data
                    pipeline that extracts key financial data points from
                    scanned PDFs and tax-related documents for easy integration
                    with tax preparation software.
                  </li>
                  <li>
                    <strong>Enhanced Data Accuracy:</strong> Applied machine
                    learning models to improve accuracy of data extraction by
                    over 15%, reducing human error in tax filing.
                  </li>
                  <li>
                    <strong>Streamlined Workflow:</strong> Integrated the NLP
                    system with existing tax software to allow automatic
                    population of tax forms, improving workflow efficiency.
                  </li>
                  <li>
                    <strong>API Development:</strong> Developed a REST API that
                    allows external services to access the NLP processing for
                    real-time data extraction.
                  </li>
                  <li>
                    <strong>Testing and Debugging:</strong> Conducted unit
                    testing and integration testing to ensure accuracy and
                    reliability of the data processing system.
                  </li>
                  <li>
                    <strong>Collaborated with Cross-functional Teams:</strong>{" "}
                    Worked closely with tax consultants to ensure the output met
                    legal and financial requirements, adapting the script as
                    necessary.
                  </li>
                  <li>
                    <strong>Security Measures:</strong> Enforced data security
                    practices by encrypting sensitive client information and
                    ensuring compliance with tax-related privacy regulations
                    (e.g., GDPR).
                  </li>
                  <li>
                    <strong>Results:</strong> Improved tax preparation speed by
                    40%, while also increasing the accuracy of processed data,
                    contributing to higher client satisfaction.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              {/* Project Duration */}
              <span className="ds-year">Nov 2025 - Dec 2025</span>

              {/* Project Title */}
              <h3 className="ds-officename">
                ROI Calculator and Data Visualizer
              </h3>

              {/* Project Role */}
              <span className="ds-department">
                Frontend Developer & Data Analyst
              </span>

              {/* Project Description */}
              <p>
                This project aimed to develop an interactive web-based tool to
                help users calculate and visualize the Return on Investment
                (ROI) from their financial data. The tool allows users to input
                their revenue and expense data manually or upload it via CSV
                files, providing a detailed breakdown of ROI metrics and
                visualizations like pie charts and bar graphs. The system also
                provides a downloadable CSV file containing the aggregated data
                for further analysis.
              </p>

              {/* Responsibilities and Achievements */}
              <div
                className="dropdown"
                ref={(el) => (dropdownRefs.current[2] = el)}
              >
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(2)}
                  ref={(el) => (buttonRefs.current[2] = el)}
                >
                  Achievements
                </button>
                <ul
                  className={`dropdown-content ${
                    openDropdowns[2] ? "open" : ""
                  }`}
                >
                  {/* List of Achievements */}
                  <li>
                    <strong>Developed the User Interface:</strong> Designed and
                    implemented a responsive, user-friendly interface using
                    HTML, CSS, and JavaScript to handle expense and revenue
                    inputs dynamically.
                  </li>
                  <li>
                    <strong>Integrated Financial Calculations:</strong> Built a
                    robust algorithm for ROI calculations, dynamically adjusting
                    based on user inputs and displaying real-time results.
                  </li>
                  <li>
                    <strong>Implemented Data Visualization:</strong> Integrated
                    Chart.js to create interactive pie and bar charts that
                    visually represent the breakdown of expenses, revenues, and
                    ROI.
                  </li>
                  <li>
                    <strong>CSV File Upload and Processing:</strong> Developed
                    the functionality for users to upload CSV files containing
                    their financial data, with automatic parsing and populating
                    of the input fields.
                  </li>
                  <li>
                    <strong>Enhanced User Experience:</strong> Enabled real-time
                    updates of financial charts and ROI metrics as users modify
                    their input, improving user interaction and satisfaction.
                  </li>
                  <li>
                    <strong>CSV Data Download:</strong> Built a feature for
                    users to download their entered or uploaded data as CSV
                    files for offline use or further analysis.
                  </li>
                  <li>
                    <strong>Cross-functional Collaboration:</strong> Worked
                    closely with stakeholders to ensure that the application met
                    business requirements and offered an intuitive, seamless
                    experience for users.
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Optimized the
                    frontend logic to handle large datasets efficiently,
                    ensuring quick load times and a smooth experience even with
                    complex data.
                  </li>
                  <li>
                    <strong>Results:</strong> Improved the financial analysis
                    process for users by providing quick, accurate insights into
                    their investments, leading to more informed business
                    decisions.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* First Project */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className="ds-year">Aug 2022 - Oct 2022</span>
              <h3 className="ds-officename">Freelancing</h3>
              <span className="ds-department">Web development</span>
              <p>
                Distinctive Photography Showcase{" "}
                <a href="https://www.uniquephotography.art">
                  www.uniquephotography.art
                </a>
              </p>

              <div
                className="dropdown"
                ref={(el) => (dropdownRefs.current[0] = el)}
              >
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(0)} // Pass index 0 for the first dropdown
                  ref={(el) => (buttonRefs.current[0] = el)}
                >
                  Achievements
                </button>
                <ul
                  className={`dropdown-content ${
                    openDropdowns[0] ? "open" : ""
                  }`} // Toggle the open class
                >
                  <li>
                    Crafted a captivating front-end web platform dedicated to
                    photography, enriched with dynamic animations and
                    interactive elements.
                  </li>
                  <li>
                    Orchestrated seamless user experiences allowing visitors to
                    leave contact messages and subscribe for upcoming discounts
                    and newsletters, effectively nurturing leads for business
                    expansion.
                  </li>
                  <li>
                    Implemented advanced functionality enabling clients to
                    effortlessly schedule appointments via PHPMailer and Google
                    Calendar integration.
                  </li>
                  <li>
                    Ensured universal accessibility with full responsiveness
                    across a diverse range of screen sizes, guaranteeing an
                    optimal browsing experience.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Second Project */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className="ds-year">Jul 2021 - May 2022</span>
              <h3 className="ds-officename">Freelancing</h3>
              <span className="ds-department">Full-stack web application</span>
              <p>
                Unique e-commerce business. Full stack web application{" "}
                <a href="https://www.dinfluenceart.com">
                  www.dinfluenceart.com
                </a>
              </p>

              <div
                className="dropdown"
                ref={(el) => (dropdownRefs.current[1] = el)}
              >
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(1)} // Pass index 1 for the second dropdown
                  ref={(el) => (buttonRefs.current[1] = el)}
                >
                  Achievements
                </button>
                <ul
                  className={`dropdown-content ${
                    openDropdowns[1] ? "open" : ""
                  }`} // Toggle the open class
                >
                  <li>
                    Create a persuasive and appealing way to organize the
                    following sentences from a resume
                  </li>
                  <li>
                    Developed an e-commerce website from scratch which can be
                    modified for any niche any purpose either political or
                    cultural.
                  </li>
                  <li>
                    The site accepts returns and payments through stripe, keeps
                    in the database items purchased, returns, items left in the
                    cart for analytics of the store.
                  </li>
                  <li>
                    Facebook Pixel installed to view all the actions performed
                    to understand and persuade better the customer as well as
                    for digital advertising purposes.
                  </li>
                  <li>
                    Clients can register, edit accounts, purchase items, leave
                    reviews, view items, contact page owners, and track orders.
                  </li>
                  <li>
                    Allows the owner to create, modify and edit new items, as
                    well as modify reviews, delete clients, and create ads.
                  </li>
                  <li>
                    The site allows clients to subscribe to a newsletter and
                    send messages to the page admin with their concerns through
                    PHPMailer, admin emails are set for auto-response.
                  </li>
                  <li>
                    Encrypted users&rsquo; data and prevented SQL injections and
                    web scripting. The website receives more than 2000
                    interactions a day and 62000 per month.
                  </li>
                  <li>
                    Boosted visits and sales by 200% by offering a marketing
                    plan for ads on Facebook, Instagram, Tiktok, and google ads.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
