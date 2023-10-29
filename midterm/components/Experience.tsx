import React from "react";

const Experience: React.FC = () => {
  const toggleDropdown = (buttonElement: any) => {
    const dropdownContent = buttonElement.currentTarget.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  };

  return (
    <div className="ds-experience-section">
      <div className="container">
        <h2 className="ds-heading">Work Experience</h2>
        <div className="row ds-experience-list">
          {/* Bank of America */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className="ds-year">May 2023 - Aug 2023</span>
              <h3 className="ds-officename">Bank of America</h3>
              <span className="ds-department">Software Engineer</span>
              <p>
                I bring a history of impactful Python solutions and a commitment
                to driving data-driven innovation. Let&rsquo;s collaborate to
                achieve technical excellence.
              </p>
              <div className="dropdown">
                <button className="dropdown-btn" onClick={toggleDropdown}>
                  Achievements
                </button>
                <ul className="dropdown-content">
                  <li>
                    Transformative Data Parsing for ML: Architected Python
                    virtual node parser fueling ML initiatives. Processed
                    diverse config files into a 100k+ row dataset, eliminating
                    duplicates. Resulting CSV and JSON outputs powered a Python
                    search engine, accelerating team performance by 20%.
                  </li>
                  <li>
                    Efficiency Amplifier - Certificate Monitor: Engineered
                    Python app to daily track expiring node certificates, saving
                    100+ annual work hours. Automated notifications ensured
                    proactive renewals, showcasing my efficiency-focused
                    solutions.
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
                    varied models, achieving a remarkable 8% error rate. My
                    dedication to data excellence drives results.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Fiserv */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className="ds-year">Jun 2022 - Aug 2022</span>
              <h3 className="ds-officename">Fiserv</h3>
              <span className="ds-department">AppOps Intern</span>
              <p>
                I bring practical java skills to the table, aiming to enhance
                your processes with realistic solutions. Let's work together to
                make a positive impact.
              </p>
              <div className="dropdown">
                <button className="dropdown-btn" onClick={toggleDropdown}>
                  Achievements
                </button>
                <ul className="dropdown-content">
                  <li>
                    Streamlined Finance Operations with Java Automation:
                    Developed an efficient Java program for smoother data
                    extraction from databases, offering the finance team
                    automated daily task support.
                  </li>
                  <li>
                    Boosted Efficiency Across Teams with Smart Scripting:
                    Crafted a practical script to seamlessly collect and share
                    CSV files from the Java program, fostering better
                    collaboration among departments.
                  </li>
                  <li>
                    Potential Annual Savings of Up to 5400 Minutes: Translated
                    these automated efforts into the prospect of saving up to
                    5400 work minutes annually for Fiserv, paving the way for
                    improved productivity.
                  </li>
                  <li>
                    Responsive Web Hub in Just One Week: Successfully delivered
                    a responsive website within a week. This platform gauges
                    product return on investment (ROI), complete with an
                    accessible dashboard featuring data insights.
                  </li>
                  <li>
                    Acknowledged for Dedication Beyond Paid Hours: Invested
                    extra, unpaid time to bring a personal creative project to
                    fruition. The recognition of the company underscores a
                    commitment to going the extra mile.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* RideEV */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className="ds-year">Feb 2022 - Jun 2022</span>
              <h3 className="ds-officename">RideEV</h3>
              <span className="ds-department">Frontend Developer</span>
              <p>
                Specializing in Vue.js, real-time mapping, and payment
                solutions, I&rsquo;ve optimized user experience in route
                tracking and navigation. Let&rsquo;s innovate together.
              </p>
              <div className="dropdown">
                <button className="dropdown-btn" onClick={toggleDropdown}>
                  Achievements
                </button>
                <ul className="dropdown-content">
                  <li>
                    Effortless Route Tracking with Vue.js UI: Engineered a
                    user-friendly interface using Vue.js, offering a practical
                    tool for calculating travel time and distance between any
                    two points across the USA.
                  </li>
                  <li>
                    Real-Time Mapping for Easy Navigation: Developed an
                    application that dynamically showcases the best route on a
                    Google map, helping clients monitor their driver&rsquo;s
                    progress and estimated time of arrival.
                  </li>
                  <li>
                    Smooth Payments via Stripe Integration: Seamlessly
                    integrated the app with Stripe&rsquo;s payment solutions,
                    ensuring accurate client billing based on travel distance
                    and duration, aligned with company rates.
                  </li>
                  <li>
                    User-Friendly Pickup Selection: Enhanced user convenience by
                    allowing clients to effortlessly pinpoint their pickup
                    location on the map, making the booking process hassle-free.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Another Fiserv */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className="ds-year">Jun 2021 - Aug 2021</span>
              <h3 className="ds-officename">Fiserv</h3>
              <span className="ds-department">Technical Operations Intern</span>
              <p>
                With skills in Java, Splunk, and PowerShell, I excel in
                real-time data analytics and automation. Let&rsquo;s collaborate
                for technical excellence.
              </p>
              <div className="dropdown">
                <button className="dropdown-btn" onClick={toggleDropdown}>
                  Achievements
                </button>
                <ul className="dropdown-content">
                  <li>
                    Developed a real-time Java program for extracting and
                    formatting database log data for display in Splunk.
                  </li>
                  <li>
                    Acquired proficiency in Splunk to analyze log data,
                    generating visual charts and dashboards for interpretation.
                  </li>
                  <li>
                    Mastered PowerShell scripting to automate various software
                    processes.
                  </li>
                  <li>
                    Spearheaded a team project focused on generating innovative
                    ideas to enhance business performance.
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

export default Experience;
