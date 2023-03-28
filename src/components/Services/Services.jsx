import React, { useState } from 'react'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
        console.log("clicked");
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Can Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Front-End Developer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Front-End Developer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Implement your Business Ideas</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Design & Develop Web Applications </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Position your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-process services__icon"></i>
                    <h3 className="services__title">Back-End Developer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)} >View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Back-End Developer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design & Develop Server Side Processes</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Develop RESTful APIs</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop & Implement Latest Trends in Server-Side Securities</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">UI/UX Designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)} >View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">UI/UX Design</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design Technology Consulting.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Brand & Design System Development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Provide Information Architecture. </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services