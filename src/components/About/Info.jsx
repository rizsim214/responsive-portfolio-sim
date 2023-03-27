import React from 'react'

const Info = () => {
  return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-award"></i>
                <h3 className="about__title">Experience </h3>
                <span className="about__subtitle">123 Years Working</span>
            </div>
            <div className="about__box">
                <i class="uil uil-check-circle"></i>
                <h3 className="about__title">Completed </h3>
                <span className="about__subtitle">123+ Projects</span>
            </div>
            <div className="about__box">
                <i class="uil uil-phone-volume"></i>
                <h3 className="about__title">Support </h3>
                <span className="about__subtitle">Online 24/7 </span>
            </div>
        </div>
    )
}

export default Info