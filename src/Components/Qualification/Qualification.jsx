import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i
              className="uil uil-graduation-cap 
				        qualification_icon"
            ></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i
              className="uil uil-briefcase-alt 
				qualification_icon"
            ></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">
                  G.H.Mahajan Highschool
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2016-2017
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                  Nemsushil Jr College
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-2019
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification__title">Bachelor of Technology</h3>
                <span className="qualification__subtitle">GCOEJ</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2013
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Developement</h3>
                <span className="qualification__subtitle">Nasscom</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023-Present
                </div>
              </div>
            </div>
			</div>

            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification__title">Java Core</h3>
                  <span className="qualification__subtitle">
				  Coding Ninjas
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    June,22-Aug,22
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <div className="qualification_line"></div>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">C, CPP, C#.NET</h3>
                  <span className="qualification__subtitle">Pratiti Technologies Internship</span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Jan,23-April,23
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">Pratiti Technologies Pvt.Ltd</span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Aug,23-Present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <div className="qualification_line"></div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Qualification;
