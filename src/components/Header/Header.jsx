import React, {useState} from 'react'
const Header = () => {
    // Toggle Menu
    const [Toggle, setToggle] = useState(false);

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
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icons"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icons"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icons"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icons"></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icons"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
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