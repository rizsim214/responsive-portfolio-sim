import React from 'react'

const Frontend = () => {

    const skills = [
        {icon: "uil uil-html5", title: "HTML 5", level: "Intermediate" },
        {icon: "uil uil-css3-simple", title: "CSS 3", level: "Intermediate" },
        {icon: "fa-brands fa-sass", title: "SCSS", level: "Basics" },
        {icon: "uil uil-java-script", title: "JAVASCRIPT", level: "Intermediate" },
        {icon: "uil uil-react", title: "REACT JS", level: "Basic" },
        {icon: "fa-brands fa-bootstrap", title: "Boostrap 5", level: "Intermediate" },
        {icon: "uil uil-github", title: "Git", level: "Intermediate" },
        {icon: "uil uil-github", title: "GitHub", level: "Intermediate" }
    ]
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                {skills.map( (skill) => 
                <div className="skills__data">
                    <i class={skill.icon}></i>
                    <h3 className="skills__name">{skill.title}</h3>
                    <span className="skills__level">{skill.level}</span>
                </div>
                )}    
            </div>
        </div>
    </div>
  )
}

export default Frontend