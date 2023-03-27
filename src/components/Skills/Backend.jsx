import React from 'react'

const Backend = () => {

    const skills = [
        {icon: "fa-brands fa-php", title: "PHP", level: "Intermediate" },
        {icon: "fa-brands fa-node", title: "NODE JS", level: "Basics" },
        {icon: "fa-regular fa-gem", title: "EXPRESS JS", level: "Basics" },
        {icon: "fa-regular fa-gem", title: "RUBY", level: "Basics" },
        {icon: "fa-solid fa-gem", title: "MYSQL", level: "Intermediate" },
        {icon: "fa-brands fa-java", title: "JAVA", level: "Intermediate" },
    ]
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

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

export default Backend