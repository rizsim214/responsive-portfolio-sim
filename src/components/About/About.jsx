import React from 'react'
import AboutImg from '../../assets/images/daniel.jpg';
import RizCV from '../../assets/images/RESUME_SIM2.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="About Me" className="about__img" />
            <div className="about__data">
                <Info />
                <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque nam officia voluptatem perferendis consequatur aperiam.</p>
                <a download="" href={RizCV} className="button button--flex">Download CV <i class="uil uil-file-download"></i></a>
            </div>
        </div>
    </section>
  )
}

export default About