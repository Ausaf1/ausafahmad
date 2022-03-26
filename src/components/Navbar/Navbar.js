import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import bars from "../../images/bars.png"
import close from "../../images/close.png"
import github from "../../images/github.png"
import email from "../../images/gmail.png"
import linkedin from "../../images/linkedin.png"

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <div className='Navbar' id='home'>
            <nav>
                <div className="logo">
                    <span className="logo__span">Ausaf</span>Ahmad
                </div>
                {(toggleMenu || screenWidth > 1024) && (
                    <ul className="list">
                        <li className="links">
                            <a className='links' href="#about">About</a>
                        </li>
                        <li className="links">
                            <a className='links' href="#skills">Skills</a>
                        </li>
                        <li className="links">
                            <a className='links' href="#projects">Projects</a>
                        </li>
                        <li className="links">
                            <a className='links' href="#contact">Contact</a>
                        </li>
                    </ul>
                )}
                <div className="menuIcons">
                    {toggleMenu ? (
                        <img src={close} className="menu__icon" alt="" onClick={() => setToggleMenu(false)} />
                    ) : (
                        <img src={bars} className="menu__icon" alt="" onClick={() => setToggleMenu(true)} />
                    )}
                </div>
                <div className="navbar__socials">
                    <div className="navbar__linkedinDiv">
                        <a href="https://www.linkedin.com/in/ausaf-ahmad-300473203/">
                            <img className='navbar__linkedin' src={linkedin} alt="instagram" />
                        </a>
                        <a href='https://www.linkedin.com/in/ausaf-ahmad-300473203/'>LinkedIn</a>
                    </div>
                    <div className="navbar__githubDiv">
                        <a href="https://github.com/Ausaf1">
                            <img className='navbar__github' src={github} alt="github" />
                        </a>
                        <a href='https://github.com/Ausaf1'>Github</a>
                    </div>
                    <a href="#contact">
                        <img src={email} className="navbar__email" alt="email" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar