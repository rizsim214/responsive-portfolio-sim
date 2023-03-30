import React, {useState} from 'react'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
        console.log("clicked");
    }
  return (
    <section className="qualification section" id="portfolio">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container">
            <div className="qualification__tabs">
             <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                <i className="uil uil-graduation-cap qualification__icon"></i>Education
             </div>
             <div onClick={() => toggleTab(2)}  className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
             </div>
            </div>

            <div className="qualification__sections">
              <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" }>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">BS - Information & Communications Technology</h3>
                    <span className="qualification__subtitle">
                      University of San Carlos Technological Centre
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2013 - 2019 
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Jr. Software Engineer</h3>
                    <span className="qualification__subtitle">
                      SeedTech PH
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - Present 
                    </div>
                  </div>
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">BS - Information & Communications Technology</h3>
                    <span className="qualification__subtitle">
                      University of San Carlos Technological Centre
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2013 - 2019 
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              </div>
              <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" }>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Jr. Software Engineer</h3>
                    <span className="qualification__subtitle">
                      SeedTech PH
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - Present 
                    </div>
                  </div>
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">BS - Information & Communications Technology</h3>
                    <span className="qualification__subtitle">
                      University of San Carlos Technological Centre
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2013 - 2019 
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Jr. Software Engineer</h3>
                    <span className="qualification__subtitle">
                      SeedTech PH
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2022 - Present 
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification