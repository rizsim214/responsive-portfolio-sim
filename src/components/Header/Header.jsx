import React, {useState} from 'react'
const Header = () => {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    // Toggle Menu
    const [Toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const HandleToggleChange = () => {
        setToggle(!Toggle);
    }
  return (
    <header className="header">
        <nav className="nav container">
            <a href="/" className="nav__logo"><i class="uil uil-java-script"></i> LostDev</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-estate nav__icons"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-user nav__icons"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-file-alt nav__icons"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-briefcase-alt nav__icons"></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-scenery nav__icons"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-message nav__icons"></i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={HandleToggleChange}></i>
            </div>
            <div className="nav__toggle" onClick={HandleToggleChange}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header