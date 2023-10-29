import React, { useState } from "react";

const Projects: React.FC = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = (dropdownNumber: number) => {
    if (dropdownNumber === 1) {
      setDropdownOpen1(!isDropdownOpen1);
    } else if (dropdownNumber === 2) {
      setDropdownOpen2(!isDropdownOpen2);
    }
  };

  return (
    <div className="ds-experience-section">
      <div className="container">
        <h2 className="ds-heading">Projects</h2>
        <div className="row ds-experience-list">
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
              <p>
                I bring an artistic touch to web development, blending
                functionality with aesthetics. Let's collaborate to enhance your
                online presence and drive business growth.
              </p>
              <div className="dropdown">
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(1)}
                >
                  Achievements
                </button>
                <ul
                  className="dropdown-content"
                  style={{ display: isDropdownOpen1 ? "block" : "none" }}
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
              <p>
                I bring an artistic touch to web development, blending
                functionality with aesthetics. Let's collaborate to enhance your
                online presence and drive business growth.
              </p>
              <div className="dropdown">
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(2)}
                >
                  Achievements
                </button>
                <ul
                  className="dropdown-content"
                  style={{ display: isDropdownOpen2 ? "block" : "none" }}
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
                    Encrypted users' data and prevented SQL injections and web
                    scripting. The website receives more than 2000 interactions
                    a day and 62000 per month.
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
